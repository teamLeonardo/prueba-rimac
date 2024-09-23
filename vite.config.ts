import * as path from 'node:path'
import reactSWC from '@vitejs/plugin-react-swc'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// Usamos process.env para acceder a variables de entorno en tiempo de configuración
const isDev = process.env.VITE_NODE_ENV === 'development'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [reactSWC(), splitVendorChunkPlugin()],
  define: {
    __DEV__: isDev,
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
