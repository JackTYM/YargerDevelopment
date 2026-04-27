# Yarger Development

A personal portfolio and freelance web development business site for Jackson Yarger, built with Nuxt 4 and deployed on Cloudflare Pages.

**Live site:** [yargerdevelopment.com](https://yargerdevelopment.com)

## Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) with Vue 3
- **Styling:** Custom CSS with Plus Jakarta Sans and DM Sans fonts
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **SEO:** [@nuxtjs/seo](https://nuxtseo.com/) with sitemap, robots.txt, and schema.org markup
- **Backend:** Nitro server routes with Cloudflare Workers runtime

## Features

- Single-page portfolio showcasing services, work samples, pricing, and testimonials
- Contact form with Discord webhook notifications
- Rate limiting via Cloudflare KV (3 requests/hour per IP)
- Calendly integration for booking calls
- Fully responsive design
- Schema.org LocalBusiness structured data

## Project Structure

```
├── app/
│   └── app.vue          # Main single-file Vue component (entire site)
├── server/
│   └── api/
│       └── contact.post.ts  # Contact form API endpoint
├── public/
│   ├── uploads/         # Project screenshots and avatar
│   └── *.png, *.svg     # Favicons and logos
├── nuxt.config.ts       # Nuxt configuration
└── wrangler.jsonc       # Cloudflare Pages configuration
```

## Environment Variables

Required secrets in Cloudflare (set via `wrangler secret put`):

| Variable | Description |
|----------|-------------|
| `DISCORD_WEBHOOK` | Discord webhook URL for contact form notifications |

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

The site deploys to Cloudflare Pages:

```bash
npm run deploy
```

This builds the site and deploys using Wrangler. The `RATE_LIMIT` KV namespace is configured in `wrangler.jsonc` for contact form rate limiting.

## License

All rights reserved. This is a personal portfolio site.
