/* SCHWWAAA CONTROLS — edit these values, then refresh the site. */
window.SCHWWAAA_CONFIG = {
  broadcast: {
    live: false, // true = LIVE! / WATCH NOW; false = UP NEXT! / events
    liveText: 'WE ARE LIVE! ✦ THE SCHWWAAA SIGNAL IS ON THE AIR ✦ WATCH NOW!',
    destinationUrl: 'https://live.schwwaaa.net', // click anywhere on the banner (live OR upcoming)
    upcomingText: 'NEW EVENTS ARE COMING! ✦ STAY TUNED FOR THE NEXT SCHWWAAA TRANSMISSION!',
  },
  membership: {
    // The existing Become a Member video. Supports YouTube URLs and local .mp4/.webm files.
    // YouTube may restrict embedding; the OPEN VIDEO link provides a fallback.
    videoUrl: 'https://www.youtube.com/watch?v=e7QLoMve8BE',
  },
  newsletter: {
    action: '', // real HTTPS provider form URL; signup is disabled until set
    method: 'POST',
    emailField: 'email',
  },
};
