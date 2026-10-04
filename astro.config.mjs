import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://autor.krick.me",
  output: "static",
  build: {
    format: "directory",
  },
});
