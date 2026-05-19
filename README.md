# Nguyen Anh Sang — Portfolio

Personal portfolio website built with Next.js 14. Designed for the international remote job market.

## ⚡ Deploy to Vercel in 2 minutes

### Option 1 — Vercel CLI (fastest)
```bash
npm i -g vercel
cd portfolio-nas
vercel
```
Follow the prompts → your site is live.

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → click **Deploy**

That's it. No environment variables needed.

## 🛠 Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 📁 Structure

```
app/
├── layout.js      # Root layout, Google Fonts, SEO metadata
├── page.js        # All portfolio content (edit this to update info)
└── globals.css    # Design system, CSS variables, animations
```

## ✏️ Customising content

All data is in `app/page.js` at the top of the file:
- `SKILLS` — tech stack groups
- `EXPERIENCE` — work history
- `PROJECTS` — selected projects (set `featured: true` for wide card)
- `PUBLICATIONS` — research papers
- `AWARDS` — honours
- `EDUCATION` — degrees

## 🎨 Changing colours

Edit CSS variables in `app/globals.css`:
```css
:root {
  --sky: #38bdf8;    /* primary accent */
  --amber: #f59e0b;  /* secondary accent */
  --bg: #050a14;     /* background */
}
```
