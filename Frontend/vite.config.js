import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://verse-valley.vercel.app/',
        secure: true, // Set to true if your backend server uses HTTPS
        changeOrigin: true, // Required for Vercel backend
      },
    },
  },
  plugins: [react()],
});
