<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/banner/hero-v2-light.svg">
  <img alt="article-viewer. No framework was harmed. Vanilla JS, HTML, CSS, ARIA. Stable." src="assets/banner/hero-v2-dark.svg" width="100%">
</picture>

<p align="center">

![status](https://img.shields.io/badge/status-stable-10b981?style=flat-square&labelColor=0a0a0b) ![group](https://img.shields.io/badge/VM.-flagship-6366f1?style=flat-square&labelColor=0a0a0b) ![stack](https://img.shields.io/badge/vanilla-js-a1a1aa?style=flat-square&labelColor=0a0a0b) ![license](https://img.shields.io/badge/license-MIT-a1a1aa?style=flat-square&labelColor=0a0a0b)

</p>

> No framework was harmed.

```text
 ████   █████   ██████  ██████   █████  ██      ██████
██  ██  ██  ██    ██      ██    ██      ██      ██
██████  █████     ██      ██    ██      ██      █████   █████
██  ██  ██ ██     ██      ██    ██      ██      ██
██  ██  ██  ██    ██    ██████   █████  ██████  ██████
██  ██  ██████  ██████  ██   ██  ██████  █████
██  ██    ██    ██      ██   ██  ██      ██  ██
██  ██    ██    █████   ██ █ ██  █████   █████
 ████     ██    ██      ███████  ██      ██ ██
  ██    ██████  ██████   ██ ██   ██████  ██  ██  ██
```

A responsive article viewer in plain HTML, CSS and JS. The UI text is German.
No build step, no dependencies. `node_modules` was not consulted.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/stats-v2-dark.svg">
  <img alt="0 DEPENDENCIES. 0 BUILD STEPS. 10 ARTICLES. 300 ms HOVER DEBOUNCE" src="assets/readme/stats-v2-light.svg" width="100%">
</picture>

<br>

## // 01 WHAT IT DOES

<img alt="01 WHAT IT DOES. SHOWS ARTICLES. THAT IS THE JOB." src="assets/readme/divider-what-v2.svg" width="100%">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/features-v2-dark.svg">
  <img alt="PLAIN MODULES: No build step. No framework. The browser loads the ES modules directly. ONE DOM UPDATE: All article buttons are built in one DocumentFragment and inserted once. ARIA FOLLOWS: aria-hidden and inert follow the overlay and the side menu." src="assets/readme/features-v2-light.svg" width="100%">
</picture>

- Shows a list of articles in an overlay. Select an article to read its headline and text.
- Loads the articles from `data/articles.json`.
- Works on every screen width (fully responsive).
- Builds the DOM with fragments, so the browser does few updates.
- Sets ARIA attributes dynamically. Debouncers keep hover from stealing focus.

<br>

## // 02 QUICK START

<img alt="02 QUICK START. ONE SERVER. ANY SERVER." src="assets/readme/divider-start-v2.svg" width="100%">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/start-v2-dark.svg">
  <img alt="Terminal: $ docker compose build && docker compose up -d | # open http://localhost:8080 | $ python3 -m http.server 8080 | # no Docker? any static server on the repo root" src="assets/readme/start-v2-light.svg" width="100%">
</picture>

With Docker Compose. Then open http://localhost:8080.

```bash
docker compose build && docker compose up -d
```

Without Docker, use any static server on the repo root. The page fetches `/data/articles.json` by absolute path.

```sh
python3 -m http.server 8080
```

- Do not open `index.html` from disk (`file://`). Browsers block ES modules and `fetch()` there.

<br>

## // 03 HOW IT WORKS

<img alt="03 HOW IT WORKS. MODULES IN. ONE FRAGMENT OUT." src="assets/readme/divider-how-v2.svg" width="100%">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/flow-v2-dark.svg">
  <img alt="index.html -> fetch() -> buttons -> #overlay. aria-hidden and inert follow the overlay. Below 768 px the list sits behind a side-menu toggle." src="assets/readme/flow-v2-light.svg" width="100%">
</picture>

```text
  browser  ·  http://localhost:8080  (nginx:alpine)
     │  GET index.html · css/main.css · js/index.js (ES modules)
     ▼
  ┌────────────────────────────┐   fetch()   ┌───────────────────────┐
  │  index.html module script  │ ──────────▸ │  data/articles.json   │
  │  fetchArticles()           │ ◂────────── │  id · headline · text │
  └─────────────┬──────────────┘    JSON     └───────────────────────┘
                │  createArticleButtons(): buttons built in one
                ▼  DocumentFragment, one DOM update for all of them
  ┌────────────────────────────┐
  │  #overlay                  │  "Alle Kategorien" opens it,
  │  aside: article buttons    │  close button or Escape closes it
  │  article: headline + text  │  focus · click   → show at once
  └────────────────────────────┘  mouseover       → 300 ms debounce

  aria-hidden / aria-inert follow the overlay and side-menu state
  below 768 px the article list sits behind a side-menu toggle
```

<br>

## // 04 USAGE

<img alt="04 USAGE. EDIT JSON. REFRESH. DONE." src="assets/readme/divider-usage-v2.svg" width="100%">

### Articles

- Edit `data/articles.json`. Each entry is `{ "id", "headline", "text" }`.
- The page creates one button per entry at load time.
- `text` goes in as HTML, so `<strong>` and `<br>` work. Put only trusted content there.

### Project layout

```text
index.html            markup + the module script that wires everything up
data/articles.json    the articles: id, headline, text (HTML)
js/articles/          fetch, button factory, button event listeners
js/aria/              aria attributes for the overlay and its buttons
js/utility/           overlay state, side menu, debouncer, Escape key
css/                  variables, layout, components, utilities
fonts/                Roboto Regular + Bold
Dockerfile            nginx:alpine image that serves the folder
docker-compose.yml    port 8080 -> 80, mounts the folder into nginx
```

### Reports

![WAVE report](image.png)

![Lighthouse report](image-1.png)

<br>

## // 05 STATUS

<img alt="05 STATUS. FINISHED. ON PURPOSE." src="assets/readme/divider-status-v2.svg" width="100%">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/status-v2-dark.svg">
  <img alt="Component: stable, finished, no version. Accessibility: WAVE and Lighthouse reports. Responsive: side menu below 768 px. Tests: none automated. License: MIT" src="assets/readme/status-v2-light.svg" width="100%">
</picture>

- Tests: none automated. The WAVE and Lighthouse reports are in [Reports](#reports).
- License: [MIT](LICENSE).

<br>

```text
-- EOF --------------------------------------- NO FRAMEWORKS WERE HARMED --
```

---

<sub>VM. studio / flagship · open source · look per <code>vm-brand</code> playbook</sub>
