import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

const VERCEL_ANALYTICS_ID = process.env.VERCEL_ANALYTICS_ID || process.env.PUBLIC_VERCEL_ANALYTICS_ID;

console.log(
  VERCEL_ANALYTICS_ID,
  process.env.PUBLIC_VERCEL_ANALYTICS_ID,
);

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
      id: VERCEL_ANALYTICS_ID, // Use the ID here
    },
    speedInsights: {
      enabled: true,
    },
  }),
  integrations: [tailwind()]
});