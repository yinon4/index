import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://yinon4.github.io",
  base: "/",
  trailingSlash: "always",
  devToolbar: {
    enabled: true,
  },
});
