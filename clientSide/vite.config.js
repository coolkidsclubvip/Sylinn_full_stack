import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  // in production, the proxy may or may not work, thus we need CORS
  server: {
    port: 3000,
    host: "0.0.0.0", // Listen on all available network interfaces
    proxy: {
      "/api": {
        target: "https://sylinn-full-stack-serverside.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});

// "http://localhost:5000"