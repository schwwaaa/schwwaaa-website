# schwwaaa inc. — 1999 portal × Corporate Memphis

This is the Corporate Memphis remix of the 1999 redesign. The bones are still 1999 (responsive page (1260px maximum), real <table> layout, tabs, broadcast bulletin ribbon, webring, 88×31 badges, fake Flash intro, under-construction pages). The skin is Corporate Memphis, the flat big-tech illustration style Facebook popularized in 2017: noodle-limbed people with tiny heads and purple/blue skin, flat color with no shading, confetti shapes (squiggles, triangles, dot grids) borrowed from the 1980s Memphis Group, lopsided blob corners, hard offset shadows. Every color still obeys the 1999 web-safe rule.

New in this version: `assets/people/` holds six original SVG illustrations (visionary.svg, sitter.svg, highfive.svg, builder.svg, plant.svg, hand.svg). They are plain SVG files, so you can open and recolor them in any text editor or vector app.

The original 1999 description follows: a responsive late-90s portal: a kids-TV-network site (chunky tilted tabs, a broadcast bulletin ribbon, a yellow clip-art sidebar, "trading card" projects) mashed up with a GeoCities homepage (tiled background, webring, 88×31 badges, under-construction pages) and a dot-com "corporate dreams" portal. Video-art motifs (CRT glass, scanlines, SMPTE color bars, a "NO SIGNAL" glitch) tie it to the work.

## Files

| File | What it is |
|---|---|
| `index.html` | Home. All 17 projects as cards, featured-project TV, news, newsletter signup widget, footer. |
| `projects.html` | Full catalog. 17 detailed entries; no search field. |
| `construction.html` | ONE page for every unfinished section: `construction.html?p=Labs`, `?p=Careers`, `?p=Viewfinder`… |
| `styles.css` | All styling. Every section has a PERIOD NOTE (how 1999 did it) and a NOW note (how this file fakes it). |
| `site-config.js` | Edit ticker content, LIVE/UP NEXT status, stream links, and newsletter signup endpoint. |
| `CHANGES-v1.1.md` | Exact requested changes, site operations, signup integration notes. |
| `script.js` | Optional extras. The site works fully with JavaScript off. |
| `assets/` | Logo, 2 KB background tiles, icons resized to 160 px (site is ~400 KB total, was ~10 MB). |

## Preview it

Double-click `index.html`. No build step, no server needed.

To see the intro again, close the tab and reopen. It plays once per browser session.

## Common edits

**Add a project**
1. Put its icon in `assets/icons/`.
2. `index.html`: copy any `<a class="card" …>` line inside `.cards`, change the CH number, URL, icon, and name. (A blank template is in the comment above the catalog.)
3. `projects.html`: copy any `<article class="detail" …>` block and edit it.
4. `script.js`: add `['Name', 'URL']` to the `LIVE` list so the webring can visit it.

**Finish an under-construction page**
Make the real page (copy `construction.html` as a starting shell), then change the links that point to `construction.html?p=ThatName`.

**Fill in the missing blurbs**
All 17 entries have descriptions in v1.3. See `PROJECT-COPY-SOURCES.md` for editorial provenance and review flags.

**Change a color**
Edit the variables at the top of `styles.css`. Keep to web-safe hex: each pair must be 00, 33, 66, 99, CC, or FF.

## Accessibility / modern safety nets
- The layout `<table>` has `role="presentation"`. On phones (< 640 px) a media query turns its cells into stacked blocks.
- "Reduce motion" in the OS settings stops all blinking, scrolling, sparkles, and the intro.
- Sparkle trail is desktop-mouse only and has an on/off toggle in the footer.
- The scrolling broadcast bulletin ribbon **keeps moving** on hover and keyboard focus. It becomes static only under reduced-motion settings.

## Research sources
- Corporate Memphis — en.wikipedia.org/wiki/Corporate_Memphis
- Memphis Group — en.wikipedia.org/wiki/Memphis_Group
- The Complete Guide to 90s Web Design — worldwidemart.com/history/90s-web-design/
- Web badge (88×31) — en.wikipedia.org/wiki/Web_badge
- Browser-safe palette — webstyleguide.com/wsg2/graphics/safe.html
- CartoonNetwork.com history — en.wikipedia.org/wiki/CartoonNetwork.com
- Hottest websites of the late 90s (Gabocorp, 2Advanced, Yugop) — vanschneider.com/hottest-websites-late-90s
- JODI net art — vice.com/en/article/jodi-something-wrong-is-nothing-wrong
- Web Design Museum galleries, 1997–2001 — webdesignmuseum.org

## Latest changes

This is **schwwaaa-memphis v1.1** based on the supplied ZIP. Open `CHANGES-v1.1.md` for the exact change list, how to control the text ribbon and live indicator, and how to connect a real newsletter signup provider. The new newsletter widget does not collect emails until configured.


## v1.2: moving banner, masthead illustrations, floppy-disk animation
- The entire top broadcast ribbon is an `<a>` pointing to `https://live.schwwaaa.net` in **both** LIVE and UP NEXT states. Keyboard focus and click both work anywhere on the ribbon. The destination can be changed with `broadcast.destinationUrl` in `site-config.js`.
- The ribbon text is still changed with `broadcast.liveText`, `broadcast.upcomingText`, and `broadcast.live` in `site-config.js`. Its right badge reads `WATCH NOW` when live and `VISIT LIVE` otherwise.
- Two existing SCHWWAAA illustrations are now placed alongside the TV-holder in the masthead: `assets/people/highfive.svg` (two people) and `assets/people/builder.svg`. Mobile uses the high-five pair so the top doesn't become overcrowded. Their sizing/positioning is in the `v1.2` block at the bottom of `styles.css`; the `Shaping tomorrow ... today!` bubble is now more central.
- `assets/people/sitter.svg` now has a lightweight, self-contained typing/bobbing animation and laptop sparkle. The floppy disk itself remains stationary. Respecting the OS reduced-motion preference turns off these animations.

## v1.3: animated TV + navigation + project descriptions

- **TV GIF:** `assets/tv/schwwaaa-loop.gif` now plays in the old test-pattern window; replace the GIF to feature your own artwork. `schwwaaa-loop-still.png` is the reduced-motion fallback.
- **Menu:** Home / Products / Live / Press / Contact. Live points at `https://live.schwwaaa.net`. Contact is explicitly a construction placeholder until a real public address or form is supplied.
- **BECOME A MEMBER:** animated button; current external destination not changed.
- **Broadcast ticker:** no longer pauses on hover, focus, or mouse-down.
- **Do Not Press:** five distinct visual reactions, changing on each consecutive reload when session storage is available.
- **Masthead:** animated Corporate Memphis confetti in the logo/character area; motion can be disabled through OS settings.
- **Products page:** 17 filled-out descriptions, original external links, the new left-side quote widget, and help icon pinned to the right of the masthead.
- **Construction preservation:** `archive/schwwaaa-memphis-v1.2-UNDER-CONSTRUCTION-BACKUP.zip` is a deliberately labeled frozen backup. See `archive/UNDER-CONSTRUCTION-ARCHIVE.md` before reusing or deleting placeholder pages.

For more implementation detail: `CHANGES-v1.3.md` and `PROJECT-COPY-SOURCES.md`.
