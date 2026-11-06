# SCHWWAAA Memphis v1.7 — focused updates

Baseline: v1.6. Only `index.html`, `projects.html`, `styles.css`, `script.js`, and `site-config.js` changed; six small animated GIFs and this changelog were added. All project cards/destinations, navigation, members TV, newsletter, live ticker, archived construction files, and other artwork were preserved.

1. **Projects masthead:** Same `bubble-script` lettering and exact “𝒮𝒽𝒶𝓅𝒾𝓃𝑔 𝓉𝑜𝓂𝑜𝓇𝓇𝑜𝓌 ... 𝓉𝑜𝒹𝒶𝓎” as Home. Adds high-fiving characters, pixel builder, and an animated `17 STRANGE CHANNELS` sticker. The help `?` remains at the far right of the masthead.
2. **Today's Directive:** Rebuilt the left-rail “Build it / Break it / Schwwaaa it” widget with moving geometric shapes and animated teal, coral, and yellow typography over a lavender base (much less solid yellow). Reduced-motion compatible.
3. **Corporate Dreams TV:** Six original local GIF channels in `assets/tv/dreams-*.gif`. One different GIF is selected on each consecutive reload using per-tab `sessionStorage`. Edit file names or order in `site-config.js` under `corporateDreams.loops`. Existing `schwwaaa-loop.gif`, `schwwaaa-loop3.gif`, and static fallback are unchanged. Users who request reduced motion see the static PNG.

**Note:** The six GIFs are new independent generative animations, not six near-identical filters over the previous TV footage. GIFs have 240×150 frames and no network dependency.
