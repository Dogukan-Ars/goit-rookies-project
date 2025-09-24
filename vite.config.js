import { defineConfig } from "vite";
import { glob } from "glob";

export default defineConfig({
  base: "/goit-rookies-project/", // GitHub Pages için repo adını kullan
  root: "src", // Root’u src olarak ayarla
  build: {
    rollupOptions: {
      input: glob.sync("src/*.html"), // src içindeki HTML’leri giriş noktası yap
    },
  },
});
