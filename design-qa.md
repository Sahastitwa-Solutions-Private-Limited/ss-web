# Design QA

## Visual targets

- Homepage: selected concept 3, `C:\Users\Prati\.codex\generated_images\019fd0e3-0b2c-7213-804e-bbbf4294f3bc\exec-a1411a4e-f8d1-4a38-b624-abb5710a1fc9.png`
- Platforms page: selected concept 2, `C:\Users\Prati\.codex\generated_images\019fd0e3-0b2c-7213-804e-bbbf4294f3bc\exec-fffcfc5a-10dd-44f5-8a57-e07fe0d1fa06.png`
- The source references were opened and inspected at original detail before implementation.

## Intended comparison captures

- Routes: `/` and `/platforms/`
- CSS viewport widths: 390px, 768px, and 1440px
- Capture type: full-page, browser rendered
- Device scale factor: not yet recorded because implementation capture was blocked before a page loaded
- A focused-region comparison is not yet applicable because the required full-page implementation captures are missing.

## Functional evidence completed

- Static production build passed with all known case-study slugs prerendered and a custom `404.html`.
- Automated route, canonical, title, mobile navigation/focus, JavaScript-disabled navigation, external-link safety, responsive overflow, and Axe checks passed in the project Playwright suite.
- Formatting, ESLint, `svelte-check`, 12 unit tests, and the production build pass through `pnpm qa`.

## Visual comparison status

The in-app browser reached its generated connection-error page when the first preview connection was attempted before the local server was listening. After the server was confirmed on `127.0.0.1:4173`, the browser's local URL policy blocked re-navigation and fresh-tab recovery. The browser-rendered implementation screenshots therefore could not be captured or placed beside the two source concepts for the required visual comparison.

This is a QA-environment blocker, not a confirmed product defect. Per the Product Design handoff rule, automated functional and Axe results do not substitute for the missing browser-rendered comparison.

## Issues

- Blocker: browser-rendered implementation captures are unavailable.
- P0/P1/P2 visual findings: not assessable until the comparison captures exist.
- Console errors: not assessable in the selected browser for the same reason.

final result: blocked
