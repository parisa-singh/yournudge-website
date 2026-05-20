# Your Nudge — Website

## Project Overview
Marketing website for **Your Nudge**, an iOS mindfulness app (App Store ID: 6739236420).
Hosted on GitHub Pages at: `https://parisa-singh.github.io/Your-Nudge-Website/`
Target domain: `https://yournudge.com/` (custom domain — not yet configured)

## Tech Stack
- Plain HTML5, CSS3, Vanilla JS — no build tools, no frameworks
- GitHub Pages for hosting (deploys automatically from `main` branch, ~30s delay)
- Google Fonts: Playfair Display (headings) + DM Sans (body)

## File Structure
```
yournudge-website/
├── index.html          # Main page (single-page site)
├── css/
│   └── styles.css      # All styles — uses CSS custom properties
├── js/
│   └── main.js         # All interactivity
├── assets/
│   ├── home_bg.png         # Dark navy mandala texture (hero background)
│   ├── intro_icon.png      # Rainbow neon mandala (philosophy section)
│   ├── ic_nudge_logo.png   # App logo mark (nav + footer)
│   ├── cultivate_icon.png  # Teal lotus icon (features card 1)
│   ├── live_icon.png       # Teal open hand icon (features card 2)
│   ├── return_icon.png     # Teal tapping finger icon (features card 3)
│   ├── screenshot_home.png # Real app screenshot (How It Works section)
│   └── screenshots/        # Additional app screenshots (not yet used)
├── CLAUDE.md           # This file
└── (pending)
    ├── privacy.html
    └── terms.html
```

## Design System
**Colors (sourced directly from app — Colors.xcassets in manojNeelam/nudge_qa)**
```css
--bg:          #0B1629   /* dark navy, main background */
--bg-alt:      #0F1C38   /* slightly lighter navy, alternating sections */
--bg-card:     #1A2D52   /* card backgrounds */
--bg-panel:    #1D365D   /* featured card background */
--blue:        #63B0F8   /* accent blue — CTAs, links, highlights */
--blue-dim:    rgba(99,176,248,0.15)
--orange:      #FF9D5C   /* warm accent — primary buttons, prices */
--orange-dim:  rgba(255,157,92,0.15)
--teal:        #71CAEE   /* secondary accent */
--sage:        #83C59B   /* checkmarks */
--yellow:      #FFE16A   /* highlight accent */
--text:        #FFFFFF
--text-mid:    #B8C4D4   /* secondary text */
--text-dim:    #6A7A8E   /* muted/meta text */
--border:      rgba(99,176,248,0.12)
--border-warm: rgba(255,157,92,0.2)
```

**Typography**
- Headings: Playfair Display (serif, italic for emphasis)
- Body: DM Sans (sans-serif)

**Tone**
Professional, warm, contemplative. Not clinical. Italic for spiritual/philosophical emphasis.

## Page Sections (in order)
1. **Nav** — sticky, blurs on scroll, mobile burger menu
2. **Hero** — `home_bg.png` mandala at edges only (CSS radial mask), centered text, App Store CTA
3. **Stats bar** — 4 animated counters (112 techniques, 50+ activities, 5,000+ years, $0 to start)
4. **Features / Three Paths** — Cultivate, Live with, Return to Awareness (real PNG icons)
5. **Philosophy** — Choiceless Awareness, `intro_icon.png` spinning mandala viz
6. **Techniques** — 6 sample cards from 112, CTA to download
7. **How It Works** — activity chips + real `screenshot_home.png` in phone frame
8. **Pricing** — $0 / $9.99 / $19.99 per year, in-app payment note + Download CTA
9. **FAQ** — 6 accordion items
10. **Final CTA** — "Most of your life is lived in the small moments"
11. **Footer** — logo, social links (placeholder), nav columns, legal links

## Hero Background — Important Details
The hero uses `home_bg.png` (grey mandala texture) with:
- `filter: grayscale(1)` — strips color from the colorful center mandala, leaving only grey texture
- `mask-image: radial-gradient(ellipse 62% 68% at 50% 50%, transparent 0%, transparent 45%, black 78%)` — makes center completely transparent so text sits on clean dark navy; mandala only visible at edges/corners
- `opacity: 0.40`
- No rotation (static)
- Mobile mask widens the transparent zone for narrow screens

## Key Interactions (js/main.js)
- `.reveal` / `.is-visible` — scroll-triggered fade-in via IntersectionObserver
- `data-count` attributes — animated number counters (fire on scroll)
- `.fq` / `.fq.open` — FAQ accordion (one open at a time)
- Nav `.scrolled` class — adds backdrop blur on scroll
- Mobile burger menu toggle

## Responsive Breakpoints (css/styles.css)
| Breakpoint | Targets |
|---|---|
| 1024px | iPad Pro landscape, small laptops |
| 900px  | iPad Mini/Air landscape — 2-col features, stacked philosophy/activities |
| 768px  | iPad portrait, large phones — burger nav, 2x2 stats |
| 640px  | Large phones — reduced section padding |
| 480px  | Standard phones (iPhone 14, Pixel) — stacked buttons, 1-col techniques |
| 390px  | Small phones (iPhone SE, mini) — scaled-down type |
| 360px  | Very small Android phones |

`prefers-reduced-motion` disables all animations.

## App Store Link
`https://apps.apple.com/us/app/your-nudge/id6739236420`

## Pricing Plans
- **$0 / free** — Maintain Your Practice (core features)
- **$9.99/yr** — Support Your Practice (full library)
- **$19.99/yr** — Deepen Your Commitment (everything + priority access)
- Payment is done in-app after free download. Note shown below cards.

## Known Gaps / Future Work
- Social media links need real URLs (currently placeholder `#`) — Instagram, X, Facebook
- `privacy.html` and `terms.html` not yet created (linked in footer)
- Custom domain setup for `yournudge.com` (see instructions below)
- Real testimonials/reviews if available
- App logo/icon as favicon (currently none)

## Custom Domain Setup (when ready)
1. Add a `CNAME` file to repo root containing: `yournudge.com`
2. In DNS provider add A records pointing to GitHub Pages IPs (185.199.108.153, .109, .110, .111)
   — or CNAME: `www` → `parisa-singh.github.io`
3. Enable "Enforce HTTPS" in repo Settings → Pages

## To Deploy Changes
```bash
git add .
git commit -m "your message"
git push origin main
```
GitHub Pages auto-deploys within ~30 seconds.
