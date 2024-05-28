import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import { resolve } from 'path'
const resolvePath = (str: string) => resolve(__dirname, str);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolvePath("src/index.tsx"),
      name: "react-wave-progress-ball-svg",
      fileName: `react-wave-progress-ball-svg`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
      plugins: [
        
      ],
    },
  },
})
