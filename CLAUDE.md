# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Working rules

- Plan in the main session, together with me. Hand grunt work (board searches, repetitive edits, boilerplate, log digging) to subagents on lesser models: Sonnet for searches, triage, and trivial mechanical work, and Opus for writing code. Keep decisions, architecture, and final review in the main session.
- Always look for the simplest solution first, and prefer it. The smallest change that solves the actual problem beats a bigger design, Extend existing patters before inventing new ones. No new dependencies or moving parts without a real reason.
- Show me a checklist while you work (use the todo list tool), keep current, so I can see what you are working on, what is done, and what is next.
- When you spawn a subagent, tell me at that moment: which model it runs on and what it is doing. Report what it came back with when it finishes.
- Never use Haiku.
- Comments: never multi-line. Omit the comment entirely when the code is obvious; otherwise one short line. Explain a fix in the commit message and the review/roadmap docs, not in the source.
- No over-explaining: Deliver the exact output requested. Do not narrate internal steps or show reasoning chains. Do not use programming jargon.
- Strict scope control: Stop when the requested task is complete. Do not expand, refactor unrequested areas, or suggest extra features.
- Use one commit per session.

## What this repo is

The page of the Laboratory of Instrumentation and Experimental Methods (ITC, Novosibirsk); the head's personal material lives on a profile page under Team. Jekyll, built on Academic Pages (Minimal Mistakes lineage), deployed by GitHub Pages from `master`.

## Local preview

```
bundle exec jekyll serve --livereload --port 4001 --host 127.0.0.1
```

Use port 4001, not 4000: NoMachine's `nxd` already listens on 4000 and the bind fails.

Ruby comes from apt; bundler is a user gem whose bin directory is not on PATH, so run `export PATH="$(ls -d ~/.local/share/gem/ruby/*/bin):$PATH"` first. Gems live in `vendor/bundle/`. The server watches files and rebuilds on save.

Never run a bare `bundle exec jekyll build` while that server is running: it rewrites `_site` with production URLs, so the local pages start loading the deployed site's CSS and the preview looks broken. For a compile check use a scratch destination:

```
bundle exec jekyll build --destination /tmp/jekyll-check
```

`_config.yml` is not reloaded on watch — restart the server after editing it.

## The design

An "instrument panel" look: content sits in bordered panels with a mono uppercase header, on a graphite/near-white surface, with a single amber accent. No sidebar; the lab's identity lives in the top bar logo and the home hero, the head's on the profile page (`_pages/melnikov.md`).

Pages: Team (`_pages/team.md`), Equipment (`_pages/equipment.md`) and the profile (`/team/melnikov/`). CV, Talks and Teaching are linked from the profile, not from the top bar.

- Colours are CSS custom properties (`--global-*`) defined twice: `_sass/theme/_air_light.scss` on `:root` and `_sass/theme/_air_dark.scss` under `html[data-theme="dark"]`. Every new colour must be defined in both. Never hardcode a hex value in a component.
- Dark mode is the theme's own toggle (`#theme-toggle` in `_includes/masthead.html`, handled in `assets/js/_main.js`). Do not add a second theming mechanism.
- Fonts are self-hosted in `assets/fonts/` and declared in `_sass/_fonts.scss`: Inter for text, IBM Plex Mono for labels, dates and metadata. Use the `$sans-serif` / `$monospace` SCSS variables, never a literal font stack, and never add a webfont CDN.
- Content width is `$site-max-width` (1100 px) in `_sass/_themes.scss`, shared by the masthead, `#main` and the footer.

### Where the styles live

| File | Holds |
| --- | --- |
| `_sass/layout/_panels.scss` | everything reusable: `.panel`, `.panel__head`, `.panel__body`, and the row types below |
| `_sass/layout/_home.scss` | the home hero and its panel grid; the profile page reuses both |
| `_sass/layout/_masthead.scss` | top bar: LIEM logo (inline chirp SVG + short and full name), nav, theme toggle |
| `_sass/layout/_footer.scss` | affiliations + Explore/Connect columns |
| `_sass/layout/_page.scss` | page width and the `.page-header` title treatment |

Row types available inside `.panel__body`: `.panel-news` (dated rows), `.panel-pubs` (numbered publications), `.panel-specs` (key/value rows), `.panel-ints` (numbered interests), `.panel-stats` (big numerals), `.panel-prose` (running text), `.panel-actions` + `.panel-btn` (buttons), `.panel-figure` (images), `.panel-person` (portrait card), `.panel-cols` (columns inside one panel; `--media` for text beside an image). Panel modifier: `.panel--accent` (amber header strip for a featured panel). Outside panels: `.panel-grid` puts panels two side by side. Reuse these before inventing a new one.

Two theme rules underline every link inside `.page__content` and `.archive`. Panel links opt out in `_panels.scss` — if a new link shows an unwanted underline, that is why.

## Adding content

- **Publication** — a file in `_publications/`. `category: manuscripts` lands it in the year panels; `category: preprints` puts it in the Preprints panel on the Publications page instead, `category: patents` in the Patents panel. The Publications page splits `citation` on the quoted title to show authors and venue separately, so keep the existing citation format.
- **Talk** — a file in `_talks/`. Adding `lat`/`lng` puts a dot on the map.
- **Teaching** — a file in `_teaching/`. `###` sections in the body each become their own panel automatically.
- **Team member** — an entry in `_data/team.yml` (`name`, `role`, optional `url`; `placeholder: true` renders it muted) shows on the Team page. `head: true` with `photo` and `bio` puts the entry in the featured panel at the top instead.
- **Equipment** — a panel in `_pages/equipment.md`; details come from the setup pages in the atomize_docs repository.
- **Post** — a file in `_posts/`. `categories: [news]` also surfaces it on the home page. The four newest posts appear as cards on the Blog page.
- **Graphical abstract** — optional on any post: `toc_figure: /images/toc/name.jpg`, plus `toc_figure_alt` and `toc_figure_caption`. Shows as a panel on the post and a thumbnail on its card.
- **Citations and h-index** — `author.citations` and `author.h_index` in `_config.yml`, shown on the Publications page. Update them by hand from Google Scholar.
- **Profile links** — `author.*` in `_config.yml`. The footer and hero render each only if its field is set.

## Things that bite

- Removing the author sidebar meant `author_profile: false` in every `_config.yml` default and no `author_profile: true` left in content front matter. A new collection needs the same.
- The portrait is a halftone render of `images/bio-photo.jpg` with a transparent background, on a white card in both themes.
- The favicon is a generated amber chirp pulse; `images/favicon.svg` is the source, the PNGs and `.ico` are rasterised from it. The top bar logo uses the same chirp.
- `main.css` has no version in its URL and GitHub Pages lets browsers cache it for 10 minutes, so right after a push the live site can show new markup with old styles. A hard refresh fixes it.
