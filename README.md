# stevenfowler.dev — Personal Site & Portfolio

The personal website and engineering portfolio of **Steven Fowler** (`stevenfowler.dev`), built with React 18, TypeScript, Vite, and Tailwind CSS, and deployed on **Cloudflare Workers Static Assets**.

## Highlights

- **Modernized Dark/Light Theme**: Instant zero-FOUC theme initialization with persistent preference and ambient purple/indigo mesh gradients.
- **Core Pillars**: Full Stack (.NET & TypeScript), Team Leadership, and Product Strategy.
- **Selected Projects Showcase**: Interactive category filter highlighting **Shipwright** (`shipwrighthq.com`), **The Callsheet** (`callsheet.quest`), **TAXA**, and **.NET Architecture Examples**.
- **Optimized Assets**: Retina portrait (`portrait.jpg`) compressed by 99% (from 8.7 MB down to ~92 KB).

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Cloudflare Deployment

```bash
npm run build
npx wrangler deploy
```
