import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'button',
      filename: 'remoteEntry.js',
      manifest: true,
      remotes: {
        store: {
          type: "module",
          name: "store",
          entry: "http://localhost:3002/remoteEntry.js",
        },
      },
      exposes: {
        './Button2': './src/components/Button',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    })
  ],
  server: {
    port: 3003
  },
  preview: {
    port: 3003
  },
  build: {
    target: 'esnext'
  },
  experimental: {
    renderBuiltUrl: filename => '../../' + filename
  },

})
