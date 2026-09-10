import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');

const IMAGE_DIRS = ['assets/3', 'assets/4', 'assets/5'];
const OG_SOURCE = path.join(publicDir, 'og-default.jpg');
const MANIFEST_PATH = path.join(__dirname, '.optimize-images-manifest.json');

type Manifest = Record<string, string>;

function loadManifest(): Manifest {
  if (!fs.existsSync(MANIFEST_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function saveManifest(manifest: Manifest): void {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
}

function hashFile(filePath: string): string {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

/** Skip files whose current content already matches the last-recorded optimized hash and whose .webp still exists — re-encoding an already-optimized JPEG loses quality with no benefit. */
function isAlreadyOptimized(manifest: Manifest, key: string, filePath: string, webpPath: string): boolean {
  if (!fs.existsSync(webpPath)) return false;
  return manifest[key] === hashFile(filePath);
}

async function optimizeFile(manifest: Manifest, filePath: string): Promise<void> {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
  const key = path.relative(root, filePath);

  if (isAlreadyOptimized(manifest, key, filePath, webpPath)) {
    console.log(`  ${path.basename(filePath)} already optimized, skipping`);
    return;
  }

  const image = sharp(filePath);
  const meta = await image.metadata();

  if (ext === '.png' && meta.hasAlpha) {
    await sharp(filePath).webp({ quality: 82 }).toFile(webpPath);
  } else if (ext === '.jpg' || ext === '.jpeg') {
    await sharp(filePath).jpeg({ quality: 82, mozjpeg: true }).toFile(filePath + '.tmp');
    fs.renameSync(filePath + '.tmp', filePath);
    await sharp(filePath).webp({ quality: 82 }).toFile(webpPath);
  } else {
    await sharp(filePath).webp({ quality: 82 }).toFile(webpPath);
  }

  manifest[key] = hashFile(filePath);

  const before = fs.statSync(filePath).size;
  const webpSize = fs.statSync(webpPath).size;
  console.log(`  ${path.basename(filePath)} → ${path.basename(webpPath)} (${Math.round(webpSize / 1024)} KB, source ${Math.round(before / 1024)} KB)`);
}

async function optimizeOgImage(manifest: Manifest): Promise<void> {
  if (!fs.existsSync(OG_SOURCE)) {
    console.warn('og-default.jpg not found, skipping OG optimization');
    return;
  }

  const webpPath = path.join(publicDir, 'og-default.webp');
  const key = path.relative(root, OG_SOURCE);

  if (isAlreadyOptimized(manifest, key, OG_SOURCE, webpPath)) {
    console.log('og-default.jpg already optimized, skipping');
    return;
  }

  const before = fs.statSync(OG_SOURCE).size;
  await sharp(OG_SOURCE)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(OG_SOURCE + '.tmp');
  fs.renameSync(OG_SOURCE + '.tmp', OG_SOURCE);

  await sharp(OG_SOURCE).webp({ quality: 82 }).toFile(webpPath);

  manifest[key] = hashFile(OG_SOURCE);

  const after = fs.statSync(OG_SOURCE).size;
  console.log(`OG image: ${Math.round(before / 1024)} KB → ${Math.round(after / 1024)} KB`);
}

async function main(): Promise<void> {
  console.log('Optimizing images...');
  const manifest = loadManifest();

  await optimizeOgImage(manifest);

  for (const dir of IMAGE_DIRS) {
    const fullDir = path.join(publicDir, dir);
    if (!fs.existsSync(fullDir)) continue;
    for (const file of fs.readdirSync(fullDir)) {
      await optimizeFile(manifest, path.join(fullDir, file));
    }
  }

  saveManifest(manifest);
  console.log('Image optimization complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
