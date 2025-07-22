// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://rainbow-mandazi-fed2da.netlify.app",
  integrations: [preact()]
});