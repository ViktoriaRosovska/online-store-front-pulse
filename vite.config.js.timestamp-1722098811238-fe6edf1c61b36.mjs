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
  server: {
    proxy: {
      "/api": {
        target: "https://pulse-run-api.onrender.com",
        changeOrigin: true,
        secure: false
      }
    }
  },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0b3JpbVxcXFxQcm9qZWN0cyBHb0l0XFxcXG9ubGluZS1zdG9yZS1mcm9udC1wdWxzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdG9yaW1cXFxcUHJvamVjdHMgR29JdFxcXFxvbmxpbmUtc3RvcmUtZnJvbnQtcHVsc2VcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3RvcmltL1Byb2plY3RzJTIwR29JdC9vbmxpbmUtc3RvcmUtZnJvbnQtcHVsc2Uvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3ZnciBmcm9tIFwiQHN2Z3Ivcm9sbHVwXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGluY2x1ZGU6IFtcclxuICAgIFwic3JjLyoqLyouanN4XCIsXHJcbiAgICBcIm5vZGVfbW9kdWxlcy8qKi8qLmpzeFwiLFxyXG4gICAgXCJzcmMvKiovKi5qc1wiLFxyXG4gICAgXCJub2RlX21vZHVsZXMvKiovKi5qc1wiLFxyXG4gIF0sXHJcbiAgcGx1Z2luczogW1tyZWFjdCgpXSwgW3N2Z3IoKV1dLFxyXG4gIFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcHJveHk6IHtcclxuICAgICAgJy9hcGknOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9wdWxzZS1ydW4tYXBpLm9ucmVuZGVyLmNvbScsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIHNyYzogXCIvc3JjXCIsXHJcbiAgICAgIGNvbXBvbmVudHM6IFwiL3NyYy9jb21wb25lbnRzXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0ZW5zaW9uczogW1wiLmpzXCIsIFwiLmpzb25cIiwgXCIuanN4XCIsIFwiLm1qc1wiLCBcIi50c1wiLCBcIi50c3hcIiwgXCIudnVlXCJdLFxyXG5cclxuICBiYXNlOiBcIi9vbmxpbmUtc3RvcmUtZnJvbnQtcHVsc2VcIixcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlYsU0FBUyxvQkFBb0I7QUFDMVgsT0FBTyxXQUFXO0FBRWxCLE9BQU8sVUFBVTtBQUdqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFBQSxFQUU3QixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVksQ0FBQyxPQUFPLFNBQVMsUUFBUSxRQUFRLE9BQU8sUUFBUSxNQUFNO0FBQUEsRUFFbEUsTUFBTTtBQUNSLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
