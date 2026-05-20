# Your Nudge — Website

## Project Overview
Marketing website for **Your Nudge**, an iOS mindfulness app (App Store ID: 6739236420).
Hosted on GitHub Pages at: `https://parisa-singh.github.io/yournudge-website/`
Target domain: `https://yournudge.com/` (custom domain — not yet configured)

## Tech Stack
- Plain HTML5, CSS3, Vanilla JS — no build tools, no frameworks
- GitHub Pages for hosting (deploys automatically from `main` branch)
- Google Fonts: Playfair Display (headings) + DM Sans (body)

## File Structure
```
yournudge-website/
├── index.html          # Main page (single-page site)
├── css/
│   └── styles.css      # All styles — uses CSS custom properties
├── js/
│   └── main.js         # All interactivity
├── CLAUDE.md           # This file
└── (future)
    ├── privacy.html
    └── terms.html
```

## Design System
**Colors (defined in `css/styles.css` :root)**
- `--bg`: #F8F6F2 — warm cream, main background
- `--bg-alt`: #EDEADF — section alternating bg
- `--bg-dark`: #1A2B3C — dark navy, feature cards + stats + activities section
- `--bg-darker`: #111D2B — footer + phone mockup
- `--purple`: #5C4B8A — primary brand color, CTAs, accents
- `--gold`: #C49A5A — warm accent, featured/pricing highlights
- `--sage`: #7AA99C — checkmarks, secondary accents
- `--text`: #1A2B3C — primary body text
- `--text-mid`: #4A5C6E — secondary body text
- `--text-light`: #7A8C9C — muted/meta text

**Typography**
- Headings: Playfair Display (serif, italic for emphasis)
- Body: DM Sans (sans-serif)

**Tone**
Professional, warm, contemplative. Not clinical. Uses italics for spiritual/philosophical emphasis.

## Page Sections (in order)
1. **Nav** — sticky, blurs on scroll, mobile burger menu
2. **Hero** — animated SVG mandala bg, headline, App Store CTA
3. **Stats bar** — dark bg, 4 stats with number counter animations
4. **Features / Three Paths** — Cultivate, Live with, Return to Awareness
5. **Philosophy** — Choiceless Awareness explainer with animated mandala viz
6. **Techniques** — 6 sample techniques from 112, with footer CTA
7. **How It Works / Activities** — activity chips + animated phone mockup
8. **Pricing** — Free + Pay-What-You-Want cards
9. **FAQ** — 6 accordion items
10. **Final CTA** — centered with mandala animation
11. **Footer** — brand, nav links, social, legal

## Key Interactions
- `.reveal` / `.is-visible` — scroll-triggered fade-in via IntersectionObserver
- `data-count` attributes — animated number counters
- `.fq` / `.fq.open` — FAQ accordion (one open at a time)
- `#phoneActivity` — rotating activity name + instruction in phone mockup (ticks every second, cycles every ~12s)
- Nav scrolled state — `.nav.scrolled` class adds backdrop blur

## App Store Link
`https://apps.apple.com/us/app/your-nudge/id6739236420`

## Social Links
Currently placeholder `#` — update with real Instagram, X, Facebook URLs.

## Custom Domain (Future)
When ready to point yournudge.com to GitHub Pages:
1. Add a `CNAME` file to the repo root containing: `yournudge.com`
2. In your DNS provider, add:
   - A records pointing to GitHub Pages IPs (185.199.108.153 etc.)
   - Or a CNAME record: `www` → `parisa-singh.github.io`
3. Enable "Enforce HTTPS" in repo Settings → Pages

## To Deploy Changes
```bash
git add .
git commit -m "your message"
git push origin main
```
GitHub Pages auto-deploys within ~30 seconds.

## Known Gaps / Future Work
- Real app screenshots needed (currently no images used)
- Social media links need real URLs
- `privacy.html` and `terms.html` pages not yet created (linked in footer)
- Consider adding an actual app logo/icon as favicon + nav logo
- May want to add real testimonials/reviews if/when available
