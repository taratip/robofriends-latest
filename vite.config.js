import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestIcons = [
  {
    src: '/web-app-manifest-192x192.png',
    sizes: '192x192',
    type: 'image/png',
  },
  {
    src: '/web-app-manifest-512x512.png',
    sizes: '512x512',
    type: 'image/png',
  }
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Robots App',
        short_name: 'PWA Robots App',
        start_url: "/",
        icons: manifestIcons,
      }
    })
  ],
  base: '/robofriends-latest/'
})
