import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  build: {
    base: '/testDeployReactProj', // Ensure the base path is set correctly for GitHub Pages
    plugins: [react()],
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        entryFileNames: 'assets/index.js', // Set a predictable name for the entry file
        chunkFileNames: 'assets/[name].js', // Set a predictable name for chunk files
        assetFileNames: 'assets/[name].[ext]' // Set a predictable name for asset files
      }
    },
    chunkSizeWarningLimit: 1000 // Adjust the chunk size warning limit if needed
    
  }
});