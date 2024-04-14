import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://yinon4.github.io",
  base: "/index",
  trailingSlash: "ignore",
  devToolbar: {
    enabled: true,
  },
});
