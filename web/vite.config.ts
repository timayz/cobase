import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: "0.0.0.0",
    port: 3010,
    proxy: {
      "/events": {
        target: "https://pikav.localhost",
        changeOrigin: true,
        ws: true,
        secure: false,
      },
      "/pikav": {
        target: "https://timada.localhost/oath",
        changeOrigin: true,
        secure: false,
      },
      "/api": {
        target: "https://timada.localhost/api/cobase",
        changeOrigin: true,
        rewrite: (path) => path.substring(4),
        secure: false,
      },
      "/kratos": {
        target: "https://timada.localhost/kratos",
        rewrite: (path) => path.substring(7),
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    target: "esnext",
  },
});