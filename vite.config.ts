import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite'
import { resolve } from 'path'
const resolvePath = (str: string) => resolve(__dirname, str);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolvePath("src/index.tsx"),
      name: "react-wave-progress-ball-svg",
      fileName: `react-wave-progress-ball-svg`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "antd"],
      output: {
        globals: {
          react: "react",
          antd: "antd",
          "react-dom": "react-dom",
        },
      },
      plugins: [
        typescript({
          target: "es2015", // 这里指定编译到的版本，
          rootDir: resolvePath("./src"),
          declaration: true,
          declarationDir: resolvePath("dist"),
          exclude: resolvePath("node_modules/**"),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
})
