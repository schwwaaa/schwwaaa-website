# SCHWWAAA Memphis v1.5 — Channel 99 update

Base: approved **v1.4**. This revision only changes the live links, marquee, and member button interaction. The 17-project catalog and construction archive are preserved.

## What's changed

- Main **Live** navigation opens `https://live.schwwaaa.net` in another tab on Home, Products, and construction pages.
- The entire **UP NEXT / LIVE banner**, including the moving text and VISIT LIVE / WATCH NOW areas, opens the live site in a new tab.
- Ticker now uses two pixel-identical groups with no hover, focus, or press pause rules. Group length is built to cover the visible width and speed scales to its content. Reduced-motion preference still shows a static message.
- **BECOME A MEMBER** on the home page opens a shaded modal containing a custom illustrated retro TV. POWER ON creates the embedded player and requests playback; POWER OFF destroys the player so video and sound stop. Close button, Escape, and backdrop click close the dialog and stop playback.

## Changing the membership video

Open **`site-config.js`**, and set `membership.videoUrl`:

```js
membership: {
  videoUrl: 'https://www.youtube.com/watch?v=e7QLoMve8BE',
}
```

It defaults to the same YouTube video linked by the old button. You can use a standard YouTube URL, a short `youtu.be/` URL, or a path to a locally hosted `.mp4` or `.webm` file (e.g. `assets/media/membership.mp4`). Local media files must actually exist at that path. Click **POWER ON** to load and play; **POWER OFF** unloads it. The **OPEN VIDEO** link is a fallback if YouTube blocks embedding or a browser's autoplay policy interferes.

YouTube embedding requires an internet connection and the video's owner must allow embedding. Some browsers may require a further click in YouTube's player before audio begins.

## Changing the ticker

Configure `broadcast.live`, `broadcast.liveText`, `broadcast.upcomingText`, or `broadcast.destinationUrl` in `site-config.js`. The whole ticker is a single link to the configured HTTPS address in a new tab. It never pauses on hover or press. In reduced-motion mode a static readable announcement is displayed instead.

## Preservation

Unmodified: construction archive, all project cards, descriptions and URLs, visual graphics, existing animations, navigation labels, and other site controls.
