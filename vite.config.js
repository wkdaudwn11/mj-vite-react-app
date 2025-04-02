import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@api': path.resolve(__dirname, 'src/shared/api'),
      '@model': path.resolve(__dirname, 'src/shared/model'),
      '@lib': path.resolve(__dirname, 'src/shared/lib'),
      '@assets': path.resolve(__dirname, 'src/shared/assets'),
      '@store': path.resolve(__dirname, 'src/shared/store'),
      '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
      '@ui': path.resolve(__dirname, 'src/shared/ui'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
});
