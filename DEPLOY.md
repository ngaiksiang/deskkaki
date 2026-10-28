# Deploying DeskKaki for free

Build locally: `npm install && npm run build`. The output goes to `dist/`.
The site URL is set in **one line** in `astro.config.mjs` (`SITE_URL`), or with the `SITE_URL` env var.

## Option A: Cloudflare Pages (recommended, gives https://deskkaki.pages.dev)
1. Create a free Cloudflare account and a free GitHub account, then push this folder to a new GitHub repo:
   `git init && git add . && git commit -m "DeskKaki starter" && git branch -M main && git remote add origin https://github.com/<you>/deskkaki.git && git push -u origin main`
2. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git** and pick the repo.
3. Use these build settings: Framework preset **Astro**, build command `npm run build`, output directory `dist`. Add the environment variable `SITE_URL=https://<project>.pages.dev` (Cloudflare uses `<project>`.pages.dev, so name the project `deskkaki` if it's free).
4. Click Deploy. Every later push to `main` redeploys automatically.
   *No-Git alternative:* `npx wrangler pages deploy dist --project-name deskkaki` (this asks you to log in to Cloudflare in the browser). A Cloudflare account alone is enough for this route.
5. Optional: Cloudflare Web Analytics (free, no cookies) is under **Pages project → Metrics → Web Analytics → Enable**.

## Option B: GitHub Pages (https://<user>.github.io/deskkaki)
1. Push the repo to GitHub as in step A1.
2. Add `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on: { push: { branches: [main] }, workflow_dispatch: {} }
permissions: { contents: read, pages: write, id-token: write }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
        env:
          SITE_URL: https://<user>.github.io
          BASE_PATH: /deskkaki     # omit if the repo is named <user>.github.io
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages }
    steps:
      - uses: actions/deploy-pages@v4
```
3. In the repo, go to **Settings → Pages → Source: GitHub Actions**. Push, and the site goes live within about 1 to 2 minutes.

## Adding a custom domain later (e.g. deskkaki.com)
1. Buy the domain (Cloudflare Registrar is at-cost).
2. **Cloudflare Pages:** go to the project, then **Custom domains → Set up a domain**. DNS is configured automatically if the domain is on Cloudflare.
   **GitHub Pages:** go to **Settings → Pages → Custom domain**, add a `CNAME` DNS record pointing `www` to `<user>.github.io` (plus A records for the apex), then tick "Enforce HTTPS". Remove `BASE_PATH`.
3. Change the one line: `SITE_URL = 'https://deskkaki.com'` in `astro.config.mjs` (or update the env var), then rebuild. Canonical tags, Open Graph URLs, the sitemap and robots.txt all update automatically.
4. In Cloudflare, add a redirect rule from the old *.pages.dev address to the new domain (Bulk Redirects, 301), and resubmit the sitemap in Google Search Console.

## Before going live
- Replace `contactEmail` in `src/data/site.ts` (currently a placeholder).
- Once affiliate programmes approve the site, paste the tracked links into `affiliateUrl` in `src/data/products.ts`.
- Re-check the prices in `src/data/products.ts`. They were captured on 28 Oct 2026.
