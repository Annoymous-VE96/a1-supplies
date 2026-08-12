/* ============================================================================
   A1 Wholesale Supplies — homepage behaviour
   ----------------------------------------------------------------------------
   Vanilla ES6+. No dependencies, no build step.
   Every module null-guards its own markup, so a missing section is a no-op.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* --------------------------------------------------------------------------
     Sticky header — condenses past the fold line
     ------------------------------------------------------------------------ */
  function initStickyHeader() {
    var header = document.getElementById('siteHeader');
    if (!header) return;

    var THRESHOLD = 120;
    var ticking = false;
    var condensed = false;

    function apply() {
      ticking = false;
      var next = window.scrollY > THRESHOLD;
      if (next === condensed) return;
      condensed = next;
      header.classList.toggle('is-condensed', condensed);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(apply);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
  }

  /* --------------------------------------------------------------------------
     Mobile drawer — focus trapped, ESC closes, background inert
     ------------------------------------------------------------------------ */
  function initDrawer() {
    var drawer = document.getElementById('drawer');
    var toggle = document.getElementById('drawerToggle');
    if (!drawer || !toggle) return;

    var panel = drawer.querySelector('.drawer__panel');
    var background = [
      document.querySelector('.announce'),
      document.getElementById('siteHeader'),
      document.getElementById('main')
    ].filter(Boolean);

    var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    var closeTimer = null;
    var isOpen = false;

    function focusables() {
      return Array.prototype.filter.call(
        panel.querySelectorAll(FOCUSABLE),
        function (el) { return el.offsetParent !== null; }
      );
    }

    function open() {
      if (isOpen) return;
      isOpen = true;
      window.clearTimeout(closeTimer);

      drawer.hidden = false;
      background.forEach(function (el) { el.inert = true; });
      document.body.classList.add('is-locked');
      toggle.setAttribute('aria-expanded', 'true');

      // Let the browser paint the hidden->shown state before transitioning in.
      window.requestAnimationFrame(function () {
        drawer.classList.add('is-open');
        var first = focusables()[0];
        if (first) first.focus();
      });
    }

    function close() {
      if (!isOpen) return;
      isOpen = false;

      drawer.classList.remove('is-open');
      background.forEach(function (el) { el.inert = false; });
      document.body.classList.remove('is-locked');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();

      var wait = reduceMotion.matches ? 0 : 260;
      closeTimer = window.setTimeout(function () { drawer.hidden = true; }, wait);
    }

    function trapFocus(event) {
      if (event.key !== 'Tab') return;
      var items = focusables();
      if (!items.length) return;

      var first = items[0];
      var last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    toggle.addEventListener('click', open);

    drawer.querySelectorAll('[data-drawer-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });

    drawer.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      trapFocus(event);
    });

    // A category tap should navigate, not leave the drawer hanging open.
    drawer.querySelectorAll('a[href]').forEach(function (link) {
      link.addEventListener('click', close);
    });

    // Resizing up to desktop makes the drawer unreachable — close it first.
    window.matchMedia('(min-width: 769px)').addEventListener('change', function (event) {
      if (event.matches) close();
    });
  }

  /* --------------------------------------------------------------------------
     Hero rotating word — Cleaning / Hygiene / Catering
     Purely decorative: the headline already reads in full for screen readers,
     so this only ever touches an aria-hidden subtree.
     ------------------------------------------------------------------------ */
  function initRotator() {
    var track = document.getElementById('rotator');
    if (!track) return;

    var words = track.querySelectorAll('.rotator__word');
    if (words.length < 2) return;
    if (reduceMotion.matches) return;   // stays pinned to the first word

    var INTERVAL = 2600;
    var index = 0;
    var timer = null;

    function step() {
      words[index].classList.remove('is-current');
      index = (index + 1) % words.length;
      words[index].classList.add('is-current');
    }

    function start() { if (!timer) timer = window.setInterval(step, INTERVAL); }
    function stop()  { window.clearInterval(timer); timer = null; }

    // Don't burn cycles rotating a word nobody is looking at.
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });

    start();
  }

  /* --------------------------------------------------------------------------
     FAQ accordion — one open at a time, fluid height via 0fr → 1fr
     ------------------------------------------------------------------------ */
  function initAccordion() {
    var root = document.getElementById('faqAccordion');
    if (!root) return;

    var buttons = root.querySelectorAll('.acc__btn');
    if (!buttons.length) return;

    function setOpen(button, open) {
      var item = button.closest('.acc__item');
      if (!item) return;
      item.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var isOpen = button.getAttribute('aria-expanded') === 'true';

        buttons.forEach(function (other) { setOpen(other, false); });
        setOpen(button, !isOpen);
      });
    });
  }

  /* --------------------------------------------------------------------------
     Scroll reveal — a single 12px rise per section, fired once
     ------------------------------------------------------------------------ */
  function initReveal() {
    var targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    function showAll() {
      targets.forEach(function (el) { el.classList.add('is-in'); });
    }

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      showAll();
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* --------------------------------------------------------------------------
     Count-up on the docket figure — runs once, when the docket is in view
     ------------------------------------------------------------------------ */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    if (reduceMotion.matches || !('IntersectionObserver' in window)) return;

    var DURATION = 900;

    function run(el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      if (isNaN(target)) return;

      var started = null;

      function frame(now) {
        if (started === null) started = now;
        var progress = Math.min((now - started) / DURATION, 1);
        var eased = 1 - Math.pow(1 - progress, 3);

        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) window.requestAnimationFrame(frame);
      }

      window.requestAnimationFrame(frame);
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        run(entry.target);
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  /* --------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */
  initStickyHeader();
  initDrawer();
  initRotator();
  initAccordion();
  initReveal();
  initCounters();
})();
