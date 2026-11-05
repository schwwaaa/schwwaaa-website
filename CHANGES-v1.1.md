# SCHWWAAA Memphis v1.1 — changes and editing guide

**Source:** the supplied `schwwaaa-memphis.zip`. Existing public project links, 17 project records, and featured-project TV carousel are preserved.

## What changed

1. Removed search fields from all page headers and the catalog filter.
2. Removed the top-right `INFO BOOTH` and `HELP` shortcuts. A small `?` at the bottom-right of the former search area links to the Help Desk. Main navigation stays the same.
3. Replaced the `NOW SHOWING` icon marquee and `ALL SHOWS` with a single continuous announcement ribbon. *The separate featured-project carousel in the page body stays.*
4. Wrapped `THE CAMPUS` heading and menu through `Help Desk` in an HTML comment; the citizen box, day counter and panic button **below** are still visible.
5. Wrapped `coming soon to the campus` in an HTML comment, not deleted.
6. Changed the poll to a newsletter email signup widget. The widget **does not collect emails** until a provider is configured.
7. Widened the page from 780px to a responsive max of 1260px, stacking the three columns at 760px and below.

## Live event announcements: edit `site-config.js`

Open `site-config.js` in a text editor. It includes:

```js
broadcast: {
  live: false,
  liveText: 'WE ARE LIVE! ✦ THE SCHWWAAA SIGNAL IS ON THE AIR ✦ WATCH NOW!',
  liveUrl: '',
  upcomingText: 'NEW EVENTS ARE COMING! ✦ STAY TUNED FOR THE NEXT SCHWWAAA TRANSMISSION!',
  upcomingUrl: '',
},
```

- Change `live: false` to **`live: true`** whenever a stream starts. The ribbon changes to **LIVE!**, plays the live message, and displays a **WATCH NOW** link if `liveUrl` is supplied.
- Change `live` back to **`false`** afterward. It returns to **UP NEXT!** and scrolls `upcomingText`. When `upcomingUrl` is supplied it shows an **EVENT INFO** link.
- Change the text to whatever you like. A repeated typographic parade is generated for you; you do not need to duplicate the message manually.
- This is a **manual switch**, not automatic YouTube/Twitch stream detection.
- The ticker pauses on hover and shows static copy with reduced-motion preference or without JS.

## Connect the newsletter signup

This is a static site. It does **not** have a mailing-list server, and does not store addresses. The button is disabled and visibly says the connection is coming until you connect it.

In the same `site-config.js`, set `newsletter.action` to the **HTTPS form-action URL** of a mailing list platform (a provider that accepts a normal HTML form POST/GET; a JSON-only API will *not* work directly from the static site):

```js
newsletter: {
  action: 'https://your-provider.example/subscribe-form-action',
  method: 'POST',
  emailField: 'email',
},
```

The button then enables and posts the email directly to the provider. Set up confirmation / double opt-in at the provider. **Do not put secret API keys in a public JS file.** This is intentionally provider-agnostic so you can begin with a free newsletter tool and eventually move to a self-hosted solution.

## Review in a browser

Open `index.html`. To see the full directory, click **Projects**. There is no build step and no dependency installation. Deploy all HTML, CSS, JS and assets together. If you test a newsletter endpoint, verify with a real email only after connecting a provider.
