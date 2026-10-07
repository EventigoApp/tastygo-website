# TastyGo website

Marketing site for TastyGo (tastygo.hu): Vue 3 + Vite, Hungarian by default with an English toggle.

```bash
npm install
npm run dev
VITE_APP_URL=https://app.tastygo.hu VITE_DEMO_URL=https://makos-bistro.tastygo.hu npm run build
```

- Copy lives in `src/i18n.js` (HU and EN side by side).
- Signup, login and demo links point at the TastyGo app (`src/config.js`).
- The contact form posts to `<APP_URL>/api/public/leads`. Allow the site's origin in the app's `WEBSITE_ORIGINS`.
