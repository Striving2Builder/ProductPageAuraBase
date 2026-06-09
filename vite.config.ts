import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function getBlogInputs(): Record<string, string> {
  const inputs: Record<string, string> = {};
  const blogsIndex = path.resolve(__dirname, 'blogs.html');
  if (fs.existsSync(blogsIndex)) {
    inputs.blogs = blogsIndex;
  }

  const blogsDir = path.resolve(__dirname, 'blogs');
  if (fs.existsSync(blogsDir)) {
    for (const file of fs.readdirSync(blogsDir)) {
      if (file.endsWith('.html')) {
        const id = file.replace(/\.html$/, '');
        inputs[`blogs/${id}`] = path.resolve(blogsDir, file);
      }
    }
  }

  return inputs;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          privacypolicy: path.resolve(__dirname, 'privacypolicy.html'),
          termsofuse: path.resolve(__dirname, 'termsofuse.html'),
          ...getBlogInputs(),
        },
      },
    },
  };
});
