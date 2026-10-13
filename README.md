# nazarii.dev

Personal site. Astro, static output, no server. English at `/`, Ukrainian at `/uk/`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
```

## Deploy (GitHub Pages, free)

Every push to `main` builds the site and publishes it with `.github/workflows/deploy.yml`. `public/CNAME` tells GitHub Pages the domain is `nazarii.dev`. GitHub Pages serves `404.html` for any missing page.

DNS at Porkbun for `nazarii.dev`:
- Four `A` records on the root (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `CNAME` for `www` → `nklymok.github.io`.
- Remove Porkbun's default parking `A`/`ALIAS` records on the root.

Once DNS resolves, GitHub issues the HTTPS certificate on its own. `.dev` domains only work over HTTPS. Then turn on "Enforce HTTPS" in the repo's Settings → Pages.

After the domain is restored, also redo these at Porkbun:
- Email forwarding `me@nazarii.dev` → your Gmail (free at Porkbun).
- The MailerSend records for `mail.nazarii.dev`, if you still use it.

## Editing the text

All homepage copy lives in `src/i18n.ts`, English and Ukrainian side by side. Each section is one paragraph of HTML, so links stay inline. The six 404 variants are at the bottom of the same file. One is picked at random per visit, in the visitor's language.

## Writing a post

Add `src/pages/blog/<slug>.md`:

```md
---
layout: ../../layouts/Post.astro
title: "Title"
description: "One line under the title"
date: 2026-10-13
lang: en
---

Text.
```

It appears at `/blog/<slug>/` and in the list at `/blog/`. Images go in `public/images/blog/`.

## Where things are

- `src/components/Home.astro`: the homepage for both languages. It holds the name glitch (katakana ナザリー・クリモク resolving into the name), the emoji animations and the Lviv clock.
- `src/layouts/Base.astro`: colours (light and dark), fonts, share-card and favicon tags.
- `src/pages/404.astro`: the random 404.
- `public/fonts/`: Fixel by MacPaw and AlfaBravo, SIL Open Font License 1.1. Keep `OFL.txt` next to the font files.
- `public/images/drums-*.webp`: the drum photo, cropped 4:5. The original is in `src/assets/`.
- `public/images/kyoto-*.webp`: responsive versions of the Fushimi Inari photo in the left margin of "Beyond Lviv".
- `public/og-en.png`, `public/og-uk.png`: share cards (1200×630). `favicon*.png`, `favicon.svg`, `apple-touch-icon.png`, `icon-512.png`: icons.
