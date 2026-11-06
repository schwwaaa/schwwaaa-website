/* SCHWWAAA CONTROLS — edit these values, then refresh the site. */
window.SCHWWAAA_CONFIG = {
  broadcast: {
    live: false, // true = LIVE! / WATCH NOW; false = UP NEXT! / events
    liveText: 'WE ARE LIVE! ✦ THE SCHWWAAA SIGNAL IS ON THE AIR ✦ WATCH NOW!',
    destinationUrl: 'https://live.schwwaaa.net', // click anywhere on the banner (live OR upcoming)
    upcomingText: 'NEW EVENTS ARE COMING! ✦ STAY TUNED FOR THE NEXT SCHWWAAA TRANSMISSION!',
  },
  corporateDreams: {
    // Six locally hosted, looping channel GIFs. A different one appears on every reload.
    // To replace them, add a GIF to assets/tv/ and edit the matching filename here.
    loops: [
      'assets/tv/dreams-01-signal-garden.gif',
      'assets/tv/dreams-02-chroma-parade.gif',
      'assets/tv/dreams-03-glitch-city.gif',
      'assets/tv/dreams-04-portal-worms.gif',
      'assets/tv/dreams-05-feedback-machine.gif',
      'assets/tv/dreams-06-cosmic-transmission.gif',
    ],
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
