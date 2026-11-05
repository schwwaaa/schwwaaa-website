/* ==========================================================================
   SCHWWAAA ONLINE — script.js
   Every feature below is optional. If JavaScript is off, the site still
   shows every project and every link. (In 1999 people turned JS off a lot.)
   ========================================================================== */
(() => {
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Browser storage can be blocked (private windows, strict settings).
  // Wrapping it means a blocked browser just "forgets" instead of crashing.
  const store = {
    get(k, which = 'local') { try { return (which === 'session' ? window.sessionStorage : window.localStorage).getItem(k); } catch (e) { return null; } },
    set(k, v, which = 'local') { try { (which === 'session' ? window.sessionStorage : window.localStorage).setItem(k, v); } catch (e) { /* ignore */ } },
  };

  /* ------------------------------------------------------------------
     THE LINK LIST — used by the webring, "random", and construction page.
     ADD A NEW PROJECT: add one line here, then copy a card in index.html
     and a .detail block in projects.html.
     ------------------------------------------------------------------ */
  const LIVE = [
    ['Videobeaux',             'https://videobeaux.online'],
    ['AdSlicer',               'https://schwwaaa.github.io/AdSlicer/'],
    ['drop-zone-ops',          'https://schwwaaa.github.io/drop-zone-ops/'],
    ['huff',                   'https://schwwaaa.github.io/huff'],
    ['Raspi Composite Player', 'https://schwwaaa.github.io/raspi-composite-player/'],
    ['mastacraf',              'https://schwwaaa.github.io/mastacraf/'],
    ['VideoSampler10_VS10',    'https://schwwaaa.github.io/VideoSampler10_VS10/'],
    ['Webglo',                 'https://webglo.online'],
    ['TURRRBO',                'https://schwwaaa.github.io/TURRRBO/'],
    ['junkpile',               'https://schwwaaa.github.io/junkpile/'],
    ['Illogica Factory',       'https://schwwaaa.github.io/illogica-factory'],
    ['obs-relay',              'https://schwwaaa.github.io/obs-relay/'],
  ];

  /* ------------------------------------------------------------------
     1. FAKE FLASH INTRO — plays once per browser session.
     sessionStorage is wiped when the tab closes, so returning tomorrow
     shows it again, but clicking around today does not.
     ------------------------------------------------------------------ */
  const intro = $('#intro');
  if (intro && !calm && !store.get('schw-intro', 'session')) {
    intro.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    const bar = $('.bar i', intro), pct = $('.pct', intro);
    // Corporate-speak loading messages, one per chunk of the progress bar
    const JARGON = ['Aligning stakeholders', 'Elongating arms', 'Leveraging blobs', 'Shrinking heads', 'Flattening paradigms', 'Circling back'];
    let p = 0, closeTimer;
    const close = () => {
      clearInterval(tick); clearTimeout(closeTimer);
      intro.hidden = true;
      document.documentElement.style.overflow = '';
      store.set('schw-intro', '1', 'session');
      const main = $('#main'); if (main) main.focus({ preventScroll: true });
    };
    const tick = setInterval(() => {
      // jumpy, uneven progress — real 56k loading bars never moved smoothly
      p = Math.min(100, p + Math.random() * 14);
      bar.style.width = p + '%';
      pct.textContent = `${JARGON[Math.min(JARGON.length - 1, Math.floor(p / (100 / JARGON.length)))]} ... ${Math.floor(p)}%`;
      if (p >= 100) {
        clearInterval(tick);
        intro.classList.add('loaded');
        pct.textContent = 'SYNERGY ACHIEVED. WELCOME, STAKEHOLDER.';
        $('.enter', intro).focus();
        closeTimer = setTimeout(close, 4000);
      }
    }, 140);
    $$('.enter, .skip', intro).forEach(b => b.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (!intro.hidden && e.key === 'Escape') close(); });
    $('.skip', intro).focus();
  }

  /* ------------------------------------------------------------------
     2. RAINBOW TEXT — wraps each letter in a <span> with its own color.
     In 1999 you pasted your text into a "rainbow generator" web page and
     it spat out <font color="#FF0000">S</font><font color="#FF9900">c</font>…
     ------------------------------------------------------------------ */
  const RAINBOW = ['#6666FF', '#FF6666', '#FFCC33', '#33CCCC', '#CC99FF', '#FF99CC', '#99CC99', '#FF9933'];
  $$('.rainbow').forEach(el => {
    const text = el.textContent;
    el.setAttribute('aria-label', text);   // screen readers read the word, not 9 letters
    el.textContent = '';
    [...text].forEach((ch, i) => {
      const s = document.createElement('span');
      s.textContent = ch;
      s.setAttribute('aria-hidden', 'true');
      s.style.color = RAINBOW[i % RAINBOW.length];
      el.appendChild(s);
    });
  });

  /* ------------------------------------------------------------------
     3. ON THE AIR — rotate the featured project every 5 seconds.
     ------------------------------------------------------------------ */
  const slides = $$('.onair .slide');
  const dots = $('.onair .dots');
  if (slides.length) {
    let i = 0, timer;
    const show = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('on', k === i));
      if (dots) $$('button', dots).forEach((d, k) => d.setAttribute('aria-pressed', String(k === i)));
      const ch = $('.onair .chnum'); if (ch) ch.textContent = 'CH ' + String(i + 1).padStart(2, '0');
    };
    if (dots) slides.forEach((s, k) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Show ' + $('h3', s).textContent);
      b.addEventListener('click', () => { show(k); restart(); });
      dots.appendChild(b);
    });
    const restart = () => { clearInterval(timer); if (!calm) timer = setInterval(() => show(i + 1), 5000); };
    const box = $('.onair');
    box.addEventListener('mouseenter', () => clearInterval(timer));
    box.addEventListener('mouseleave', restart);
    box.addEventListener('focusin', () => clearInterval(timer));
    show(0); restart();
  }

  /* ------------------------------------------------------------------
     4. BROADCAST RIBBON — edit site-config.js to change LIVE / UP NEXT.
     Two identical text runs produce a continuous marquee. Reduced motion
     and no-JavaScript modes show a static, readable announcement.
     ------------------------------------------------------------------ */
  const bulletin = $('.bulletin-bar');
  if (bulletin) {
    const conf = window.SCHWWAAA_CONFIG?.broadcast || {};
    const isLive = conf.live === true;
    const message = String((isLive ? conf.liveText : conf.upcomingText) ||
      (isLive ? 'WE ARE LIVE! WATCH NOW!' : 'More events coming soon. Stay tuned!')).trim();
    const label = $('#bulletin-label');
    const staticLine = $('#bulletin-static');
    const track = $('#bulletin-track');
    const link = $('#bulletin-link');
    bulletin.dataset.state = isLive ? 'live' : 'upcoming';
    if (label) label.textContent = isLive ? 'LIVE!' : 'UP NEXT!';
    if (staticLine) staticLine.textContent = message;
    if (track && !calm) {
      for (let copy = 0; copy < 2; copy++) {
        const group = document.createElement('div');
        group.className = 'bulletin-group';
        for (let i = 0; i < 4; i++) {
          const item = document.createElement('span');
          item.className = 'bulletin-message';
          item.textContent = message;
          const symbol = document.createElement('span');
          symbol.className = 'bulletin-symbol';
          symbol.textContent = ['✦', '●', '▲', '✳'][i];
          group.append(item, symbol);
        }
        track.appendChild(group);
      }
      bulletin.classList.add('has-motion');
    }
    // The *whole ribbon* is one keyboard-accessible link, regardless of whether
    // a stream is live. Its text and destination are edited in site-config.js.
    const destination = String(conf.destinationUrl || 'https://live.schwwaaa.net').trim();
    if (destination.startsWith('https://')) bulletin.href = destination;
    bulletin.setAttribute('aria-label', isLive
      ? 'WATCH NOW — open SCHWWAAA Live'
      : 'UP NEXT — visit SCHWWAAA Live for broadcasts and upcoming events');
    if (link) link.textContent = isLive ? 'WATCH NOW ➜' : 'VISIT LIVE ➜';
  }

  /* ------------------------------------------------------------------
     5. ODOMETER — "days since corporate dreams began" (1 Jan 1999).
     A real number, not a fake hit count.
     ------------------------------------------------------------------ */
  const odo = $('.odometer');
  if (odo) {
    const days = Math.floor((Date.now() - Date.UTC(1999, 0, 1)) / 86400000);
    const digits = String(days).padStart(6, '0');
    odo.setAttribute('aria-label', days + ' days');
    odo.innerHTML = [...digits].map(d => `<span aria-hidden="true">${d}</span>`).join('');
  }

  /* ------------------------------------------------------------------
     6. DO NOT PRESS — pick a page-wide surprise on *load*, not click.
     Session history prevents consecutive reloads from repeating the last
     effect. The same routine handles ALL buttons on ALL pages.
     Reduced motion gets a short, non-flashing message instead.
     ------------------------------------------------------------------ */
  const panicButtons = $$('.panic');
  if (panicButtons.length) {
    const variants = ['signal', 'quake', 'disco', 'confetti', 'fold'];
    const previous = store.get('schw-last-panic', 'session');
    const choices = variants.filter(v => v !== previous);
    const effect = choices[Math.floor(Math.random() * choices.length)];
    store.set('schw-last-panic', effect, 'session');
    panicButtons.forEach(btn => {
      btn.dataset.effect = effect;
      btn.title = 'WARNING: surprise effect changes each page load';
    });
    let stopTimer;
    const banner = document.createElement('div');
    banner.className = 'panic-caption';
    banner.setAttribute('role', 'status');
    banner.setAttribute('aria-live', 'polite');
    banner.hidden = true;
    document.body.appendChild(banner);
    const trigger = btn => {
      clearTimeout(stopTimer);
      document.body.classList.remove('glitch', ...variants.map(v => 'panic-' + v));
      $$('.panic-scrap').forEach(p => p.remove());
      const messages = {
        signal: 'SIGNAL LOST! PLEASE STAND BY',
        quake: 'THIS PAGE IS NOT EARTHQUAKE RATED',
        disco: 'SYNERGY HAS GONE TECHNICOLOR',
        confetti: 'PARTY PROTOCOL ACCIDENTALLY ENABLED',
        fold: 'CORPORATE REALITY IS BENDING'
      };
      banner.textContent = calm ? 'BUTTON PRESSED. THE BUILDING IS FINE.' : messages[effect];
      banner.hidden = false;
      if (!calm) {
        document.body.classList.add(effect === 'signal' ? 'glitch' : 'panic-' + effect);
        if (effect === 'confetti') {
          const r = btn.getBoundingClientRect();
          const x = r.left + r.width / 2, y = r.top + r.height / 2;
          for (let i = 0; i < 32; i++) {
            const piece = document.createElement('span');
            piece.className = 'panic-scrap';
            piece.textContent = ['✦', '▲', '●', '■', '〰'][i % 5];
            piece.style.left = x + 'px'; piece.style.top = y + 'px';
            piece.style.color = RAINBOW[i % RAINBOW.length];
            piece.style.setProperty('--dx', (Math.cos(i * 2.4) * (70 + (i % 7) * 17)) + 'px');
            piece.style.setProperty('--dy', (Math.sin(i * 2.4) * (55 + (i % 8) * 18)) + 'px');
            piece.style.setProperty('--twist', (i * 97) + 'deg');
            document.body.appendChild(piece);
          }
        }
      }
      stopTimer = setTimeout(() => {
        document.body.classList.remove('glitch', ...variants.map(v => 'panic-' + v));
        banner.hidden = true;
        $$('.panic-scrap').forEach(p => p.remove());
      }, calm ? 950 : 1900);
    };
    panicButtons.forEach(btn => btn.addEventListener('click', () => trigger(btn)));
  }

  /* ------------------------------------------------------------------
     7. NEWSLETTER — native provider HTML form, not a fake subscription.
     It stays disabled until a valid HTTPS signup endpoint is configured.
     ------------------------------------------------------------------ */
  const newsletter = $('#newsletter-form');
  if (newsletter) {
    const conf = window.SCHWWAAA_CONFIG?.newsletter || {};
    const url = String(conf.action || '').trim();
    const button = $('button[type="submit"]', newsletter);
    const note = $('#newsletter-note');
    if (/^https:\/\//i.test(url)) {
      newsletter.action = url;
      newsletter.method = String(conf.method || 'POST').toUpperCase() === 'GET' ? 'GET' : 'POST';
      const email = $('input[type="email"]', newsletter);
      if (email) email.name = String(conf.emailField || 'email');
      if (button) button.disabled = false;
      if (note) note.textContent = 'Subscribe for transmissions. Unsubscribe through the newsletter.';
    } else if (note) note.textContent = 'Signup connection coming soon.';
  }

  /* ------------------------------------------------------------------
     8. SPARKLE CURSOR TRAIL — desktop mice only, toggle in the footer.
     ------------------------------------------------------------------ */
  const fine = window.matchMedia('(pointer: fine)').matches;
  let sparkOn = store.get('schw-sparkle') !== 'off';
  const toggle = $('#sparkle-toggle');
  const paintToggle = () => { if (toggle) toggle.textContent = 'sparkles: ' + (sparkOn ? 'ON' : 'OFF'); };
  if (toggle) {
    if (!fine || calm) toggle.parentElement.hidden = true;
    toggle.addEventListener('click', () => { sparkOn = !sparkOn; store.set('schw-sparkle', sparkOn ? 'on' : 'off'); paintToggle(); });
    paintToggle();
  }
  if (fine && !calm) {
    const GLYPHS = ['▲', '●', '■', '◆', '~', '◗'];  // Memphis confetti
    let last = 0;
    document.addEventListener('pointermove', e => {
      if (!sparkOn || e.timeStamp - last < 45) return;
      last = e.timeStamp;
      const s = document.createElement('span');
      s.className = 'sparkle';
      s.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      s.style.left = e.clientX + 8 + 'px';
      s.style.top = e.clientY + 8 + 'px';
      s.style.color = RAINBOW[Math.floor(Math.random() * RAINBOW.length)];
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 720);
    });
  }

  /* ------------------------------------------------------------------
     9. WEBRING — prev / next / random hop through the live projects.
     A real webring linked strangers' sites in a circle; ours circles
     through your own projects.
     ------------------------------------------------------------------ */
  let ringPos = Math.floor(Math.random() * LIVE.length);
  const go = n => { ringPos = (n + LIVE.length) % LIVE.length; window.location.href = LIVE[ringPos][1]; };
  $$('[data-ring]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const dir = a.dataset.ring;
    if (dir === 'next') go(ringPos + 1);
    else if (dir === 'prev') go(ringPos - 1);
    else go(Math.floor(Math.random() * LIVE.length));
  }));

  /* ------------------------------------------------------------------
     10. CATALOG SEARCH REMOVED — all project cards remain visible.
     ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
     11. UNDER CONSTRUCTION — one page, many names: construction.html?p=Labs
     ------------------------------------------------------------------ */
  const PAGES = {
    'Info Booth':     ['assets/map/map-info-booth.svg',     'Visitor center and orientation. Free maps, questionable directions.'],
    'Contact':        ['assets/map/map-help-desk.svg',      'Contact channel under construction. A direct public contact address has not been configured yet.'],
    'Labs':           ['assets/map/map-labs.svg',           'The prototype campus, where experiments go before they are projects.'],
    'Investor Hall':  ['assets/map/map-investor-hall.svg',  'Numbers, trust, and institutional fog.'],
    'Press Room':     ['assets/map/map-press-room.svg',     'Bulletins, claims, artifacts.'],
    'Help Desk':      ['assets/map/map-help-desk.svg',      'Talk to a human-ish operator.'],
    'Central Commons':['assets/map/map-central-commons.svg','The shared court. Public weirdness.'],
    'Careers':        ['assets/map/map-facility-grid.svg',  'We build strange things with serious people.'],
    'The Archive':    ['assets/map/map-project-block.svg',  'Everything we ever made, filed in a basement.'],
    'Guestbook':      ['assets/map/map-press-room.svg',     'Sign in. Say hi. Leave a mark on the campus.'],
    'Legal':          ['assets/map/map-investor-hall.svg',  'The fine print, being printed finer.'],
    'Privacy':        ['assets/map/map-help-desk.svg',      'Secured by paranoia.'],
    'Accessibility':  ['assets/map/map-info-booth.svg',     'Our accessibility statement.'],
    'Viewfinder':     ['assets/icons/project-viewfinder.svg',    'One API for most EVM blockchain explorers and their clones.'],
    'Api-gateway':    ['assets/icons/project-api-gateway.svg',   'A prebuilt, scalable API template for getting real infrastructure online faster.'],
    'Scoping-voices': ['assets/icons/project-scoping-voices.svg','Stakeholder voices captured, mashed, and archived.'],
    'Kowabungataug':  ['assets/icons/project-kowabungataug.svg', 'Code name for an upcoming project about scam calls. Newsletter transmission pending.'],
    'Ordvault':       ['assets/icons/project-ordvault.svg',      'A collection of software libraries hosted on-chain via Bitcoin.'],
  };
  const site = $('.dig-site');
  if (site) {
    const asked = new URLSearchParams(location.search).get('p') || '';
    const key = Object.keys(PAGES).find(k => k.toLowerCase() === asked.toLowerCase());
    const name = key || 'This Page';
    const [icon, blurb] = PAGES[key] || ['assets/map/map-info-booth.svg', 'Something is being dug up here.'];
    document.title = `${name} — UNDER CONSTRUCTION — schwwaaa`;
    $('#dig-name').textContent = name;
    $('#dig-blurb').textContent = blurb;
    const img = $('#dig-icon'); img.src = icon;
    const list = $('.otherpages');
    if (list) list.innerHTML = Object.entries(PAGES)
      .filter(([k]) => k !== key)
      .map(([k, [ic]]) => `<a href="construction.html?p=${encodeURIComponent(k)}"><img src="${ic}" alt="">${k}</a>`)
      .join('');
  }
})();
