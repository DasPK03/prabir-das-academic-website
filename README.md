# Prabir Kumar Das — Academic Research Website

Personal academic website of **Prabir Kumar Das**, Marie Skłodowska-Curie Doctoral
Researcher in the EU BRAINET Doctoral Network at **Tampere University, Finland**
(Computational Biophysics and Imaging Group, CBIG).

Built with **React + TypeScript + Vite + Tailwind CSS**, deployed free on **GitHub Pages**.

**Live URL (after deployment):** https://daspk03.github.io/prabir-das-academic-website/

---

## 1. Quick start (run locally)

```bash
npm install      # install dependencies (Node 18+ recommended)
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build locally
```

---

## 2. Deploy to GitHub Pages (one-time setup)

### a) Create the repository and push

```bash
# from inside this folder
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/DasPK03/prabir-das-academic-website.git
git push -u origin main
```

### b) Turn on GitHub Pages (GitHub Actions)

1. Open the repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. That's it. The included workflow (`.github/workflows/deploy.yml`) runs on every
   push to `main`: it installs, builds, and publishes `dist/` to Pages.

The first deploy takes a minute or two. After it finishes, the site is live at
`https://daspk03.github.io/prabir-das-academic-website/`.

### Updating the site later

```bash
git add .
git commit -m "Update content"
git push
```

Every push to `main` redeploys automatically.

> **If you rename the repository**, update the base path in **two** places:
> `vite.config.ts` (`base`) and `package.json` (`homepage`), then also the URLs in
> `index.html`, `public/robots.txt`, `public/sitemap.xml` and `public/404.html`.

---

## 3. Editing content (no React needed)

All content lives in **`src/data/`** — plain TypeScript objects. You edit these;
you never touch the components.

| To change… | Edit this file |
|---|---|
| Name, role, bio, research interests | `src/data/profile.ts` |
| Publications | `src/data/publications.ts` |
| **Static homepage statistics** | `src/data/publicationStats.ts` |
| Research themes | `src/data/research.ts` |
| Research projects | `src/data/projects.ts` |
| Education timeline | `src/data/education.ts` |
| Experience / teaching / skills | `src/data/experience.ts` |
| Awards | `src/data/awards.ts` |
| GitHub repositories | `src/data/repositories.ts` |
| YouTube videos | `src/data/videos.ts` |
| Homepage "news" updates | `src/data/updates.ts` |
| External links (ORCID, GitHub, CV…) | `src/data/links.ts` |

### Add a publication

Open `src/data/publications.ts` and add an object to the `publications` array:

```ts
{
  id: 'unique-id-2027',
  type: 'conference',              // 'conference' | 'journal' | 'ip'
  title: 'Full paper title',
  authors: [
    { name: 'Prabir Kumar Das', me: true, corr: true }, // me → bold, corr → corresponding
    { name: 'Co Author' },
  ],
  venue: 'Full conference / journal name',
  venueShort: 'VENUE 2027',
  publisher: 'IEEE',               // omit if unknown — do not invent
  year: 2027,
  status: 'Accepted',             // 'Published' | 'Accepted' | 'Presented'
  firstAuthor: true,               // optional — enables the "First author" filter
  corresponding: true,             // optional — enables the "Corresponding" filter
  doi: '10.xxxx/xxxxx',            // optional
  pdf: 'https://…',                // optional
  github: 'https://github.com/…',  // optional
}
```

Adding or removing a publication here **does not** change the homepage statistics
(see below).

### Add a project

Add an object to the `projects` array in `src/data/projects.ts`. Set `themeId` to one
of the theme ids in `src/data/research.ts` so it appears under the right filter, and
link papers via `publicationIds`. Mark ongoing work with `status: 'Ongoing'` and omit
`findings` until there are verified results.

### Add a video

Add an object to `src/data/videos.ts` with the YouTube video `id` (the part after
`watch?v=`) and a title. Thumbnails are the standard YouTube thumbnails for that id.

### Update the static statistics

The homepage/publication statistics are **fixed and maintained by hand** in
`src/data/publicationStats.ts`. They are intentionally **not** calculated from the
publication list, so adding or deleting a paper never changes them:

```ts
export const publicationStats = {
  totalConferencePapers: 12,
  published: 1,
  presented: 5,
  accepted: 6,
  registeredDesigns: 1,
};
```

Change these numbers only by editing this file.

> **Note on the current numbers.** The statistics above use the values specified for
> the site (Presented 5 / Accepted 6). Your CV's own status tags currently split as
> **Presented 6 / Accepted 5** (one paper differs). The numbers are static by design,
> so edit this file if you want them to match the CV exactly.

---

## 4. Replacing the CV and photo

- **CV:** replace `public/cv/Prabir_Kumar_Das_CV.pdf` with your latest PDF (keep the
  filename, or update `links.cv` in `src/data/links.ts`). The source `CV.tex` is also
  kept in `public/cv/` for reference.
- **Photo:** the hero/about photo is `src/assets/prabir.jpg` (a web-optimised version
  of your `Prabir3.png`). Replace it with a same-shaped image to update it everywhere.
  The original full-resolution `Prabir3.png` is in `public/assets/`.

---

## 5. Project structure

```
prabir-das-academic-website/
├── public/              # static files copied as-is (CV, favicon, robots, sitemap, 404)
│   ├── assets/Prabir3.png
│   ├── cv/Prabir_Kumar_Das_CV.pdf
│   ├── favicon.ico, apple-touch-icon.png, og-cover.png
│   ├── robots.txt, sitemap.xml, 404.html, .nojekyll
├── src/
│   ├── assets/prabir.jpg           # optimised portrait
│   ├── components/                 # Navbar, Footer, PublicationItem, …
│   ├── data/                       # ← all editable content
│   ├── hooks/                      # theme + page-meta
│   ├── pages/                      # Home, About, Research, Publications, …
│   ├── App.tsx, main.tsx, index.css
├── .github/workflows/deploy.yml    # GitHub Pages CI
├── index.html, vite.config.ts, tailwind.config.js, package.json
```

---

## 6. Features

Responsive navigation · publication search & filtering · project filtering ·
dark/light mode · downloadable CV · ORCID / GitHub / YouTube integration · SEO
metadata, sitemap & robots.txt · social-sharing (Open Graph) card · back-to-top ·
custom 404 · keyboard-accessible, skip-to-content navigation.

Routing uses a **HashRouter**, so deep links work on GitHub Pages with no server
configuration.

---

## 7. Placeholders to fill in

Two links are intentionally left as clearly-labelled placeholders until you provide
them — edit `src/data/links.ts`:

```ts
googleScholar: '', // add your Google Scholar profile URL
linkedin: '',      // add your LinkedIn profile URL
```

When filled, they appear automatically in the Contact page and link bars.

---

© Prabir Kumar Das. Code released under the MIT License.
