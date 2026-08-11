# Sahastiwa Solutions website

Production-oriented corporate website for Sahastiwa Solutions Pvt. Ltd., built as a fully prerendered SvelteKit site for Cloudflare Pages.

## Stack

- Node.js 24 LTS and pnpm 11
- SvelteKit, Svelte 5, and TypeScript
- Tailwind CSS 4 with CSS-first semantic design tokens
- Bits UI for the link-button and mobile-dialog primitives
- Vitest, Playwright, and Axe
- `@sveltejs/adapter-static` and Cloudflare Pages

## Local development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env` for local values. Preview builds may omit booking and direct-contact values; the contact page then displays an explicit configuration notice instead of fake details.

## Quality checks

```bash
pnpm lint
pnpm check
pnpm test:unit
pnpm build
pnpm test:e2e
```

`pnpm qa` runs formatting, ESLint, Svelte checks, unit tests, and the static production build. The CI workflow also installs Chromium and runs the Playwright suite against the built preview.

## Release configuration

The release build rejects missing or invalid launch values:

```text
PUBLIC_SITE_URL=https://www.example.com
PUBLIC_BOOKING_URL=https://scheduler.example.com/consultation
PUBLIC_CONTACT_EMAIL=engineering@example.com
PUBLIC_CONTACT_PHONE=+91 ...
```

Run the guarded release build with:

```bash
pnpm build:release
```

Cloudflare Pages uses `pnpm build` with `build` as the output directory. `wrangler.jsonc` is configured for the `sahastiwa-solutions` Pages project. The `_headers` file applies security headers, immutable caching only to fingerprinted Svelte assets, and `noindex` to `pages.dev` aliases.

## Content and launch inputs

Developer-managed content lives in `src/lib/content`. Current work entries are deliberately framed as public technology-platform or capability profiles; they contain no client names, testimonials, certifications, performance metrics, or verified outcomes.

Before launch, replace the environment placeholders and obtain approval for:

- custom domain, scheduler, business email, phone, and legal address;
- customer/case-study copy and any performance claims;
- project photographs and their usage rights;
- final privacy notice and website terms;
- a vector or horizontal logo, if available.

The supplied `assets/logo.jpeg` is preserved untouched. Web-ready logo variants and generated hardware illustrations are stored separately. Generated hardware images are treated as illustrative engineering visuals, not as photographs of disclosed products or client work.
