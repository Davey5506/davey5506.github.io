import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { contact } from './src/sections/Details.js'
import { buildVCard, vCardFileName } from './src/vcard.js'

// Serves (dev) and emits (build) the contact card next to contact/index.html
function contactCard() {
  const fileName = `contact/${vCardFileName(contact)}`
  return {
    name: 'contact-card',
    configureServer(server) {
      server.middlewares.use(`/${fileName}`, (req, res) => {
        res.setHeader('Content-Type', 'text/vcard; charset=utf-8')
        res.end(buildVCard(contact))
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName, source: buildVCard(contact) })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactCard()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // contact/ is a standalone page that is intentionally not linked from the home page
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
      },
    },
  }
})
