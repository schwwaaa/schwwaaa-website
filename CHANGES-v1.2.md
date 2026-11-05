# SCHWWAAA Memphis — v1.2 changes

Based on v1.1. All 17 existing project catalog records and URLs preserved. The campus navigation and Coming Soon sections remain commented out, and the newsletter widget remains as configured previously.

1. **Broadcast:** the entire ribbon (badge, scrolling text, and right-hand call-to-action) is an anchor to `https://live.schwwaaa.net`, regardless of LIVE/UP NEXT status. Keyboard accessible, with hover/focus states. Change its destination with `broadcast.destinationUrl` in `site-config.js`; edit messages with `liveText`, `upcomingText`, `live`.
2. **Masthead:** reused matching original high-five and builder SVG art to add three more illustrated characters. The speech bubble is centered over the figures, with media queries to avoid cramping tablets/phones. The corner `?` remains.
3. **Welcome:** edited `assets/people/sitter.svg` itself so the seated employee types/bobs and their laptop pixels pulse. Disk stays in place. Animations are disabled when `prefers-reduced-motion: reduce`.

No other site content or project links were changed. No external frameworks or assets added.
