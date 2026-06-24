import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');

const IMAGE_DIRS = ['assets/3', 'assets/5'];
const OG_SOURCE = path.join(publicDir, 'og-default.jpg');

async function optimizeFile(filePath: string): Promise<void> {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
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

  const before = fs.statSync(filePath).size;
  const webpSize = fs.statSync(webpPath).size;
  console.log(`  ${path.basename(filePath)} → ${path.basename(webpPath)} (${Math.round(webpSize / 1024)} KB, source ${Math.round(before / 1024)} KB)`);
}

async function optimizeOgImage(): Promise<void> {
  if (!fs.existsSync(OG_SOURCE)) {
    console.warn('og-default.jpg not found, skipping OG optimization');
    return;
  }

  const before = fs.statSync(OG_SOURCE).size;
  await sharp(OG_SOURCE)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(OG_SOURCE + '.tmp');
  fs.renameSync(OG_SOURCE + '.tmp', OG_SOURCE);

  await sharp(OG_SOURCE).webp({ quality: 82 }).toFile(path.join(publicDir, 'og-default.webp'));

  const after = fs.statSync(OG_SOURCE).size;
  console.log(`OG image: ${Math.round(before / 1024)} KB → ${Math.round(after / 1024)} KB`);
}

async function main(): Promise<void> {
  console.log('Optimizing images...');
  await optimizeOgImage();

  for (const dir of IMAGE_DIRS) {
    const fullDir = path.join(publicDir, dir);
    if (!fs.existsSync(fullDir)) continue;
    for (const file of fs.readdirSync(fullDir)) {
      await optimizeFile(path.join(fullDir, file));
    }
  }

  console.log('Image optimization complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
