import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 8080
  // }
  plugins: [react(), sentryVitePlugin({
    org: "i-tech-9n",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})