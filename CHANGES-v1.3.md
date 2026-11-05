# SCHWWAAA-MEMPHIS v1.3 — change log

**Baseline:** supplied/established schwwaaa-memphis v1.2. Existing project URLs preserved.

1. **Corporate Dreams TV:** The `index.html` `.crt .glass` now contains a genuine animated GIF (`assets/tv/schwwaaa-loop.gif`), an original small looping collage. Swap the file using the same name to display your own animated GIF; keep aspect ratio about 8:5. `assets/tv/schwwaaa-loop-still.png` is the still shown to reduced-motion users. The TV housing and plant are unchanged.
2. **Global navigation:** Home, Products, Live, Press, Contact across `index.html`, `projects.html`, `construction.html`. Products is the existing `projects.html`; Live opens `https://live.schwwaaa.net`; Press goes to the homepage `#pressroom`; Contact currently goes to an **honest under-construction placeholder** (`construction.html?p=Contact`) until a public contact channel is configured. No fake email is invented.
3. **Member animation:** `.citizen .bevel` gets a gentle cartoon bounce, star spin, and hover motion. Existing link is unchanged.
4. **Ticker uninterrupted:** Hover, focus, and active mouse-down never pause `.bulletin-track`; clicking navigates to Live, ending the current page naturally. Reduced-motion visitors get static text, as before.
5. **Projects:** All 17 detail entries now have substantial, project-specific summaries and feature lists. See `PROJECT-COPY-SOURCES.md` for public-source vs provisional content. Existing external project links remain unchanged.
6. **Under-construction backup:** `archive/schwwaaa-memphis-v1.2-UNDER-CONSTRUCTION-BACKUP.zip` is a frozen, restorable copy of the entire preceding site, including all placeholder pages and commented campus/coming-soon sections. See `archive/UNDER-CONSTRUCTION-ARCHIVE.md`. Nothing removed from current construction registry; Contact added.
7. **Do Not Press:** Five distinct effects assigned **once per page load**: signal loss, page quake, techno-color shift, Memphis confetti explosion, and 3D page fold. In a normal browser with session storage, consecutive reloads never choose the same effect. Any `.panic` button uses this behavior. Reduced-motion preference gets a stationary message.
8. **Masthead:** Seven animated original Memphis cut-paper accents behind the existing logo, characters and bubble, on all main pages. Responsive and reduced-motion rules included.
9. **Products help icon:** The `?` is pinned to the far-right corner of the masthead/logo panel, including small screens.
10. **Quote widget:** The exact approved “Perfect. Schwwaaa specializes…” statement is in a stylized yellow `rail-idea` widget in the left sidebar above the directory, removed from the page bottom.

## Edit locations

- The **TV GIF:** replace `assets/tv/schwwaaa-loop.gif`; update its static companion image as well.
- **Navbar:** each HTML file has `nav.tabs` (Home, Products, Live, Press, Contact).
- **Member animation:** `styles.css`, search `membership-bounce`.
- **Ticker behavior:** `styles.css`, search `Once started, the broadcast ticker`; text/state still in `site-config.js`.
- **Do Not Press:** `script.js`, section 6. To change available variants, edit `variants`; visual effects in the final v1.3 block of `styles.css`.
- **Masthead art:** `div.mast-ornaments` in each HTML and `.mast-ornaments` in CSS.
- **Products widget & corner ?:** `projects.html` `.rail-idea`; `styles.css` `.catalog .mast-side`.
- **Under-construction page definitions:** `script.js`, the `PAGES` object; original archive in `archive/`.

## Preserved functionality / limitations

- Newsletter cannot collect subscriptions until a real signup endpoint is supplied in `site-config.js`.
- Contact is a placeholder; a real public email or form has not been provided.
- The introductory splash, project carousel, cards, footers, citizen widget and commented-out campus sections remain intact.
- Site remains static HTML/CSS/JavaScript. No build or external runtime dependencies.
- This is a stylistic redesign; the 1999–2001 dates displayed in the retro presentation are fictionalized decor, not dated news updates.
