import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";

export default defineConfig({
  site: "https://autor.krick.me",
  output: "static",
  markdown: {
    processor: satteri({
      features: { smartPunctuation: false },
    }),
  },
  build: {
    format: "directory",
  },
});
