import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      'app': '/src/app/',
      'features': '/src/features/',
      'pages': '/src/pages/',
      'shared': '/src/features/',
    }
  }
})
