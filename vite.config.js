import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
        host: '0.0.0.0', // Bind to 0.0.0.0 for Render
        port: 3000,       // Specify the port (optional)
    },
})
