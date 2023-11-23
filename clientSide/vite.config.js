// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), vanillaExtractPlugin()],
//   // in production, the proxy may or may not work, thus we need CORS
//   server: {
//     port: 3000,
//     host: "0.0.0.0", // Listen on all available network interfaces
//     proxy: {
//       "/api": {
//         target: "https://sylinn-full-stack-serverside.onrender.com",
//         changeOrigin: true,
//         secure: true,
//       },
//     },
//   },
// });

 


////////////
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [
      react(),
      vanillaExtractPlugin() // https://vanilla-extract.style/documentation/integrations/vite/
    ],
    server: {
      // https://vitejs.dev/config/server-options.html#server-port
      port: env.VITE_PORT,
  
      // https://vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        }
      }
    }
  }
})