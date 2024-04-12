import { defineConfig } from "astro/config";

export default defineConfig({
  // integrations: [],
  site: 'https://yinon4.github.io',
  base: "/planet",
  trailingSlash: "ignore",
  devToolbar: {
    enabled: false
  },
});
