/**
 * Nuxt configuration:
 * - Registers global CSS from assets/common.css and assets/home-1-49.css
 * - Injects the small client-only script assets/app.js
 * - Keeps existing server and nitro settings
 */
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    '@/assets/common.css',
    '@/assets/home-1-49.css'
  ],
  vue: {
    compilerOptions: {
      // Keep public asset URLs literal in templates. Prevent Vite from treating them as imports.
      transformAssetUrls: false
    }
  },
  app: {
    head: {
      script: [
        // Load simple client behavior (non-blocking, only in client)
        { src: '/app.js', defer: true }
      ],
      link: [
        // Ensure fonts are available globally for this page styling
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lobster&family=Poppins:wght@500&family=Roboto:wght@500&display=swap' }
      ]
    }
  },
  nitro: {
    routeRules: {
      "/**": {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    },
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: true,
      port: 3000,
    },
  },
});
