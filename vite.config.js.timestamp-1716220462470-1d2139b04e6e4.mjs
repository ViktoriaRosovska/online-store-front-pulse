// vite.config.js
import { defineConfig } from "file:///C:/Users/torim/Projects%20GoIt/online-store-front-pulse/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/torim/Projects%20GoIt/online-store-front-pulse/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/torim/Projects%20GoIt/online-store-front-pulse/node_modules/@svgr/rollup/dist/index.js";
var vite_config_default = defineConfig({
  include: [
    "src/**/*.jsx",
    "node_modules/**/*.jsx",
    "src/**/*.js",
    "node_modules/**/*.js"
  ],
  plugins: [[react()], [svgr()]],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components"
    }
  },
  extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  base: "/online-store-front-pulse"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0b3JpbVxcXFxQcm9qZWN0cyBHb0l0XFxcXG9ubGluZS1zdG9yZS1mcm9udC1wdWxzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdG9yaW1cXFxcUHJvamVjdHMgR29JdFxcXFxvbmxpbmUtc3RvcmUtZnJvbnQtcHVsc2VcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3RvcmltL1Byb2plY3RzJTIwR29JdC9vbmxpbmUtc3RvcmUtZnJvbnQtcHVsc2Uvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3ZnciBmcm9tIFwiQHN2Z3Ivcm9sbHVwXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGluY2x1ZGU6IFtcclxuICAgIFwic3JjLyoqLyouanN4XCIsXHJcbiAgICBcIm5vZGVfbW9kdWxlcy8qKi8qLmpzeFwiLFxyXG4gICAgXCJzcmMvKiovKi5qc1wiLFxyXG4gICAgXCJub2RlX21vZHVsZXMvKiovKi5qc1wiLFxyXG4gIF0sXHJcbiAgcGx1Z2luczogW1tyZWFjdCgpXSwgW3N2Z3IoKV1dLFxyXG5cclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBzcmM6IFwiL3NyY1wiLFxyXG4gICAgICBjb21wb25lbnRzOiBcIi9zcmMvY29tcG9uZW50c1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dGVuc2lvbnM6IFtcIi5qc1wiLCBcIi5qc29uXCIsIFwiLmpzeFwiLCBcIi5tanNcIiwgXCIudHNcIiwgXCIudHN4XCIsIFwiLnZ1ZVwiXSxcclxuXHJcbiAgYmFzZTogXCIvb25saW5lLXN0b3JlLWZyb250LXB1bHNlXCIsXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZWLFNBQVMsb0JBQW9CO0FBQzFYLE9BQU8sV0FBVztBQUVsQixPQUFPLFVBQVU7QUFHakIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFFN0IsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZLENBQUMsT0FBTyxTQUFTLFFBQVEsUUFBUSxPQUFPLFFBQVEsTUFBTTtBQUFBLEVBRWxFLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
