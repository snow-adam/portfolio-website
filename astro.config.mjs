import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/server';
import tailwind from "@astrojs/tailwind";
 
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: false,
    },
  }),
  integrations: [tailwind()]
});