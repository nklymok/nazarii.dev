import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://nazarii.dev",
  build: {
    // One HTML file per page, no extra CSS requests.
    inlineStylesheets: "always",
  },
});
