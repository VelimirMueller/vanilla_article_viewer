<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/banner/hero-v2-light.svg">
  <img alt="article-viewer. No framework was harmed. Vanilla JS, HTML, CSS, ARIA. Stable." src="assets/banner/hero-v2-dark.svg" width="100%">
</picture>
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/lead-v2-light.svg">
  <img alt="A responsive article viewer in plain HTML, CSS and JS. The UI text is German. No build step, no dependencies. node_modules was not consulted." src="assets/readme/lead-v2-dark.svg" width="100%">
</picture>
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/stats-v2-light.svg">
  <img alt="0 DEPENDENCIES. 0 BUILD STEPS. 10 ARTICLES. 300 ms HOVER DEBOUNCE" src="assets/readme/stats-v2-dark.svg" width="100%">
</picture>
</p>

<br>

<p>
<img alt="01 WHAT IT DOES. SHOWS ARTICLES. THAT IS THE JOB." src="assets/readme/divider-what-v2.svg" width="100%">
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/features-v2-light.svg">
  <img alt="PLAIN MODULES: No build step. No framework. The browser loads the ES modules directly. ONE DOM UPDATE: All article buttons are built in one DocumentFragment and inserted once. ARIA FOLLOWS: aria-hidden and inert follow the overlay and the side menu" src="assets/readme/features-v2-dark.svg" width="100%">
</picture>
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/what-v2-light.svg">
  <img alt="Articles in an overlay: Shows a list of articles in an overlay. Select an article to read its headline and text. One JSON file: Loads the articles from data/articles.json. Fully responsive: Works on every screen width. Few DOM updates: Builds the DOM with fragments, so the browser does few updates. Dynamic ARIA: Sets ARIA attributes dynamically. Debounced hover: Debouncers keep hover from stealing focus" src="assets/readme/what-v2-dark.svg" width="100%">
</picture>
</p>

<br>

<p>
<img alt="02 QUICK START. ONE SERVER. ANY SERVER." src="assets/readme/divider-start-v2.svg" width="100%">
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/start-v2-light.svg">
  <img alt="Terminal: $ docker compose build &amp;&amp; docker compose up -d | # open http://localhost:8080 | $ python3 -m http.server 8080 | # no Docker? any static server on the repo root" src="assets/readme/start-v2-dark.svg" width="100%">
</picture>
</p>

<details>
<summary><picture><source media="(prefers-color-scheme: light)" srcset="assets/readme/links-4-v2-light.svg"><img alt="Plain text" src="assets/readme/links-4-v2-dark.svg" width="32%"></picture></summary>

```bash
docker compose build && docker compose up -d   # then open http://localhost:8080
```

```sh
python3 -m http.server 8080   # no Docker: any static server on the repo root
```

</details>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/serve-v2-light.svg">
  <img alt="Docker Compose: Run docker compose build &amp;&amp; docker compose up -d. Then open http://localhost:8080 (http://localhost:8080). No Docker: Use any static server on the repo root, for example python3 -m http.server 8080. The page fetches /data/articles.json by absolute path. Never from disk: Do not open index.html from disk (file://). Browsers block ES modules and fetch() there" src="assets/readme/serve-v2-dark.svg" width="100%">
</picture>
</p>

<br>

<p>
<img alt="03 HOW IT WORKS. MODULES IN. ONE FRAGMENT OUT." src="assets/readme/divider-how-v2.svg" width="100%">
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/flow-v2-light.svg">
  <img alt="index.html -&gt; fetch() -&gt; buttons -&gt; #overlay. aria-hidden and inert follow the overlay. Below 768 px the list sits behind a side-menu toggle." src="assets/readme/flow-v2-dark.svg" width="100%">
</picture>
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/runtime-v2-light.svg">
  <img alt="Browser: Opens http://localhost:8080 (http://localhost:8080), served by nginx:alpine. It gets index.html, css/main.css and js/index.js (ES modules). Fetch: The module script in index.html calls fetchArticles(). fetch() reads data/articles.json (id, headline, text) as JSON. Buttons: createArticleButtons() builds all buttons in one DocumentFragment: one DOM update for all of them. #overlay: Holds an aside with the article buttons and an article with headline and text. Alle Kategorien opens it. The close button or Escape closes it. Focus, click, hover: Focus or click shows the article at once. Mouseover waits for a 300 ms debounce. ARIA and small screens: aria-hidden and aria-inert follow the overlay and side-menu state. Below 768 px the article list sits behind a side-menu toggle" src="assets/readme/runtime-v2-dark.svg" width="100%">
</picture>
</p>

<br>

<p>
<img alt="04 USAGE. EDIT JSON. REFRESH. DONE." src="assets/readme/divider-usage-v2.svg" width="100%">
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/articles-v2-light.svg">
  <img alt="Edit one file: Edit data/articles.json. Each entry is { &quot;id&quot;, &quot;headline&quot;, &quot;text&quot; }. One button per entry: The page creates one button per entry at load time. Trusted HTML only: text goes in as HTML, so &lt;strong&gt; and &lt;br&gt; work. Put only trusted content there" src="assets/readme/articles-v2-dark.svg" width="100%">
</picture>
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/layout-v2-light.svg">
  <img alt="index.html: Markup + the module script that wires everything up. data/articles.json: The articles: id, headline, text (HTML). js/articles/: Fetch, button factory, button event listeners. js/aria/: ARIA attributes for the overlay and its buttons. js/utility/: Overlay state, side menu, debouncer, Escape key. css/: Variables, layout, components, utilities. fonts/: Roboto Regular + Bold. Dockerfile: nginx:alpine image that serves the folder. docker-compose.yml: Port 8080 -&gt; 80, mounts the folder into nginx" src="assets/readme/layout-v2-dark.svg" width="100%">
</picture>
</p>

<details>
<summary><picture><source media="(prefers-color-scheme: light)" srcset="assets/readme/links-4-v2-light.svg"><img alt="Plain text" src="assets/readme/links-4-v2-dark.svg" width="32%"></picture></summary>

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

</details>

<br>

<p>
<img alt="05 STATUS. FINISHED. ON PURPOSE." src="assets/readme/divider-status-v2.svg" width="100%">
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/status-v2-light.svg">
  <img alt="Component: stable, finished, no version. Accessibility: WAVE and Lighthouse reports. Responsive: side menu below 768 px. Tests: none automated. License: MIT" src="assets/readme/status-v2-dark.svg" width="100%">
</picture>
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/checks-v2-light.svg">
  <img alt="Tests: None automated. The WAVE and Lighthouse reports are behind the chips below. License: MIT, see LICENSE" src="assets/readme/checks-v2-dark.svg" width="100%">
</picture>
</p>

<p align="center">
<a href="image.png"><picture><source media="(prefers-color-scheme: light)" srcset="assets/readme/links-1-v2-light.svg"><img alt="WAVE report (image.png)" src="assets/readme/links-1-v2-dark.svg" width="32%"></picture></a>
<a href="image-1.png"><picture><source media="(prefers-color-scheme: light)" srcset="assets/readme/links-2-v2-light.svg"><img alt="Lighthouse report (image-1.png)" src="assets/readme/links-2-v2-dark.svg" width="32%"></picture></a>
<a href="LICENSE"><picture><source media="(prefers-color-scheme: light)" srcset="assets/readme/links-3-v2-light.svg"><img alt="License (LICENSE)" src="assets/readme/links-3-v2-dark.svg" width="32%"></picture></a>
</p>

<p>
<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/readme/footer-v2-light.svg">
  <img alt="VM. studio / flagship · open source · look per vm-brand playbook · -- EOF -- no frameworks were harmed --" src="assets/readme/footer-v2-dark.svg" width="100%">
</picture>
</p>
