# 🌲 Woodscape Infrastructure — Website

**Premium Commercial Interiors & Construction landing site for Woodscape Infrastructure.**

Live production website for Woodscape Infrastructure, a commercial interior design and construction firm based in India. The site is a fully hand-crafted, static HTML/CSS/JS website — no frameworks, no build tools. Designed for maximum performance.

---

## 📁 Project Structure

```
woodscape_Dsignxt/
│
├── index.html              # Main landing page (home)
├── project-details.html    # Individual project / case study page
├── thank-you.html          # Form submission confirmation page
│
├── styles.css              # Global styles for index.html
├── script.js               # Global JS (animations, forms, carousel, modals)
│
├── project-details.css     # Styles specific to project-details.html
├── project-details.js      # JS specific to project-details.html
│
├── images/                 # All image assets
│   └── unused/             # Images no longer in use (safe to delete)
├── videos/                 # Compressed client story video files (cv1–cv8.mp4)
│
├── robots.txt              # SEO crawl rules
├── sitemap.xml             # XML sitemap for search indexing
├── _headers                # Netlify HTTP response headers (security, cache)
├── _redirects              # Netlify redirect rules
│
├── package.json            # Project metadata
└── package-lock.json       # npm lock file (only used for local dev tooling)
```

---

## 🗂 Pages

### `index.html` — Main Landing Page
The primary marketing page. Contains the following sections (in order):

| Section | Description |
|---|---|
| **Navbar** | Fixed top nav with logo, links, estimate CTA. Hamburger menu on mobile. |
| **Hero** | Full-screen background slideshow with tagline and form card |
| **Commercial Construction** | GSAP scroll-pinned section — slides into view on scroll |
| **Commercial Interiors** | GSAP scroll-pinned section — second slide |
| **Featured Projects** | Horizontal scrolling project cards with hover effects |
| **Industries Served** | Grid of 6 industry icons with seamless bordered layout |
| **Why Woodscape** | Horizontal scroll carousel of value-add cards |
| **Featured Case Study** | Before/After image slider + testimonial card + estimate CTA card |
| **Delivery Process** | Step-by-step process section with icons |
| **Founder's Perspective** | Founder quote section with background photo |
| **Static Banner** | Full-width image banner |
| **Success Stories** | Highlighted project stats + project image carousel |
| **Client Stories** | Video carousel with mute controls (cv1–cv8.mp4) |
| **Connect to an Expert** | Phone / WhatsApp / Estimate modal CTA strip |
| **FAQ** | Accordion FAQ section |
| **Quick Estimate Form** | Embedded estimate form (submits to Google Sheets) |
| **Footer** | Logo, nav links, social icons, copyright |

### `project-details.html` — Project Case Study Page
Detailed individual project showcase page with:
- Full-screen hero image
- Project description & metadata
- Image gallery (lightbox)
- Contact / inquiry form
- FAQ section
- CTA strip

### `thank-you.html` — Thank You Page
Simple confirmation page shown after any form is successfully submitted. Auto-redirects after a few seconds.

---

## 🎨 Design System

**Typography:**
- Headlines: `Playfair Display` (serif, Google Fonts)
- Body: `Inter` (sans-serif, Google Fonts)

**Colour palette:**
| Token | Value | Usage |
|---|---|---|
| `--primary-red` | `#C8102E` | CTAs, highlights, accents |
| `--dark-bg` | `#0D1B2A` | Dark backgrounds, nav |
| `--white` | `#ffffff` | Text on dark, card backgrounds |
| `--light-bg` | `#f4f4f4` | Light section backgrounds |

**Responsive Breakpoints:**
| Breakpoint | Applies to |
|---|---|
| `max-width: 992px` | Hamburger nav activates |
| `max-width: 1024px` | Full mobile layout overrides |
| `max-width: 768px` | Compact mobile adjustments |
| `max-width: 600px` | Extra small adjustments |

---

## ⚡ Key Features

### GSAP Scroll Animation
- The Commercial Construction and Commercial Interiors sections are **pinned** using **GSAP ScrollTrigger**.
- On desktop, section 2 slides up over section 1 as the user scrolls.
- On mobile (≤768px), this animation is disabled; sections stack vertically.

### Hero Slideshow
- Auto-playing 5-second interval slideshow with manual dot navigation.
- Separate hero background images for desktop (`bgherosection1.jpg`) and mobile (`mobherobanner.jpg`).

### Client Stories Video Carousel
- Horizontal scroll carousel of 8 client video cards (`cv1.mp4` – `cv8.mp4`).
- Each video has a per-card mute/unmute button. Unmuting one auto-mutes all others.
- Videos are compressed to H.264, CRF 30, 720p max for fast loading.

### Before/After Image Slider
- Auto-cycling before/after image pair in the Case Study section.
- Synchronized — both panels advance together on a timer.

### Estimate Modal
- Triggered by `.open-estimate-modal` class on any element.
- Overlay with a full estimate request form.
- Closes on overlay click or `Escape` key.
- Traps focus for accessibility.

### Scroll-Linked Navbar Hide
- On mobile (≤768px), the navbar slides up/down **1:1 with scroll position** (not threshold-based).
- On desktop, always visible.

### Why Woodscape Draggable Carousel
- Horizontally scrollable carousel with custom drag scrollbar thumb.
- Auto-scrolls on desktop only.

---

## 📬 Forms & Backend Integration

All forms submit to a **Google Apps Script Web App** which writes to a Google Sheet and sends an email notification.

**Google Script URL** (set in `script.js` line ~66):
```js
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/...exec';
```

### Forms Present

| Form | Location | Fields |
|---|---|---|
| **Hero Quote Form** | `index.html` — hero section | Name, Mobile, Email, Message |
| **Estimate Form** | `index.html` — bottom section | Name, Phone, Company, Email, Service, Sqft, Budget, Location |
| **Modal Estimate Form** | `index.html` — modal popup | Name, Phone, Email, Company, Message |
| **Project Inquiry Form** | `project-details.html` | Name, Phone, Email, Project Type, Message |

All successful submissions redirect to `thank-you.html`.

---

## 🖼 Assets

### Images (`/images/`)
- All JPEGs are compressed at **75% quality** using macOS `sips`.
- Large PNGs converted to JPEG for smaller file sizes:
  - `foundermob.png` (1.7MB) → `foundermob.jpg` (228KB)
  - `wwbgmob.png` (864KB) → `wwbgmob.jpg` (136KB)
- Unused images are in `images/unused/` — safe to delete permanently.

### Videos (`/videos/`)
All 8 client story videos are compressed using **FFmpeg H.264 CRF 30, 720p, AAC 96kbps**:

| File | Original | Compressed |
|---|---|---|
| cv1.mp4 | 77MB | 3.9MB |
| cv2.mp4 | 46MB | 4.1MB |
| cv3.mp4 | 74MB | 7.5MB |
| cv4.mp4 | 89MB | 6.3MB |
| cv5.mp4 | 56MB | 5.4MB |
| cv6.mp4 | 49MB | 4.7MB |
| cv7.mp4 | 69MB | 4.6MB |
| cv8.mp4 | 59MB | 5.7MB |

---


### Manual Deploy
Drag and drop the `woodscape_Dsignxt/` folder into the Netlify dashboard.

### Configuration Files
- **`_headers`** — Sets security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Cache-Control` for assets).
- **`_redirects`** — Handles any URL redirects (e.g. old slugs).
- **`robots.txt`** — Allows all crawlers, points to sitemap.
- **`sitemap.xml`** — Lists indexable pages for Google Search Console.

---

## 🛠 Local Development

No build step needed — open directly in a browser.

**Recommended: Use Live Server (VS Code)**
1. Install the "Live Server" VS Code extension
2. Right-click `index.html` → **Open with Live Server**
3. Site runs at `http://127.0.0.1:5500/woodscape_Dsignxt/`

**Or use npx:**
```bash
cd woodscape_Dsignxt
npx serve .
```

---

## 🔧 Third-Party Dependencies (CDN)

| Library | Version | Purpose |
|---|---|---|
| GSAP | 3.x | Scroll-pinned commercial sections animation |
| ScrollTrigger | 3.x (GSAP plugin) | Trigger-based scroll animations |
| Google Fonts | — | `Playfair Display`, `Inter` typography |

All loaded via CDN — no local npm build required.

---

## 🔑 SEO

- Unique `<title>` and `<meta description>` on each page
- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- Single `<h1>` per page
- `sitemap.xml` submitted to Google Search Console
- OG / Twitter meta tags for social sharing
- Image `alt` attributes on all content images

---

## 📞 Contact / Business Info

**Woodscape Infrastructure**
- 📞 Phone: Available via the Connect to an Expert section
- 💬 WhatsApp: Linked in the Expert CTA section
- 🌐 Domain: Configured in Netlify

---

## 📝 Git Repository

**Remote:** `https://github.com/netcreek143/woodscapes_v1.git`
**Branch:** `main`

```bash
git clone https://github.com/netcreek143/woodscapes_v1.git
cd woodscapes_v1/woodscape_Dsignxt
```

---

*Built by DsignXt | Woodscape Infrastructure Website © 2026*
