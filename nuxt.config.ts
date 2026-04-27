// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap' },
      ],
    },
  },

  site: {
    url: 'https://yargerdevelopment.com',
    name: 'Yarger Development',
    description: 'Custom websites, web apps, and integrations for small businesses and big ideas. Fast turnaround, flat-rate pricing. Phoenix, Arizona web developer.',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: false,
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'Yarger Development',
      description: 'Custom websites, web apps, and integrations for small businesses and big ideas. Fast turnaround, flat-rate pricing.',
      url: 'https://yargerdevelopment.com',
      logo: 'https://yargerdevelopment.com/icon-512.png',
      image: 'https://yargerdevelopment.com/icon-512.png',
      email: 'jackson@yargerweb.com',
      address: {
        addressLocality: 'Phoenix',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
      priceRange: '$100-$500+',
      founder: {
        type: 'Person',
        name: 'Jackson Yarger',
        jobTitle: 'Full-Stack Web Developer',
        url: 'https://yargerdevelopment.com/#about',
      },
      sameAs: [
        'https://calendly.com/yargerweb',
      ],
    },
  },

  sitemap: {
    sources: ['/'],
  },

  robots: {
    allow: '/',
  },

  nitro: {
    preset: "cloudflare-pages",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  modules: ["@nuxtjs/seo", "nitro-cloudflare-dev"]
})
