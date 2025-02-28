import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),

    federation({
      name: 'store',
      filename: 'remoteEntry.js',
      remotes: {
      },
      exposes: {
        './store': './src/statemangement/store',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    }),
  ],
  server: {
    port:3002
  },
  preview: {
    port:3002
  },
  build: {
    target: 'esnext'
  },
})
