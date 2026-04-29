# Portfolio — Next.js + Tailwind

Personal developer portfolio. Built with Next.js 14, Tailwind CSS, and Framer Motion. Deployed on Vercel.

---

## Local Setup

### Prerequisites
- Node.js 18+ installed (`node -v` to check)
- npm (comes with Node)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

Hot reload is on by default — save any file and the browser updates instantly.

---

## Before You Deploy — Personalise These Files

### 1. `lib/personal.ts`
Update your name, email, GitHub, LinkedIn, and location.

### 2. `lib/projects.ts`
Update the `liveUrl` and `githubUrl` for each project.
Add new projects to this array — they auto-appear on the site.

### 3. `app/layout.tsx`
Update the `metadata` title and description with your actual name.

### 4. `public/resume.pdf`
Drop your resume PDF here. The Resume link in the nav points to `/resume.pdf`.

---

## Build & Check Locally (Before Pushing)

```bash
# Production build
npm run build

# Run the production build locally
npm start
# → http://localhost:3000

# Lint check
npm run lint
```

Always run `npm run build` before pushing. If it errors locally, it will error on Vercel.

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
# Follow prompts — it auto-detects Next.js
```

### Option B — GitHub (recommended for ongoing use)
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Next.js — click Deploy
4. Every future `git push` auto-deploys

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, Navbar + Footer
│   ├── page.tsx            # Homepage: Hero, Ticker, Projects, Contact
│   └── about/
│       └── page.tsx        # About page: bio, skills grid, what I do
├── components/
│   ├── Navbar.tsx          # Top nav with active state
│   ├── Footer.tsx          # Footer
│   ├── ProjectCard.tsx     # Animated project card
│   └── SkillsTicker.tsx    # Scrolling skills bar
├── lib/
│   ├── projects.ts         # ← ADD NEW PROJECTS HERE
│   └── personal.ts         # ← UPDATE YOUR INFO HERE
├── styles/
│   └── globals.css         # Tailwind base + custom animations
├── public/
│   └── resume.pdf          # ← DROP YOUR RESUME HERE
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Adding a New Project

Open `lib/projects.ts` and add an object to the `projects` array:

```ts
{
  id: "my-new-project",
  title: "My New Project",
  shortDesc: "One sentence description shown on the card.",
  longDesc: ["Bullet 1", "Bullet 2"],
  tags: ["Python", "LLMs"],
  status: "live",           // "live" | "wip" | "archived"
  liveUrl: "https://...",
  githubUrl: "https://...",
  platform: "HuggingFace Spaces",
}
```

That's it — the card appears automatically.
