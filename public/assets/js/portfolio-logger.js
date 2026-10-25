// /* portfolio-logger.js – logs page views and resume downloads */
// const LOG_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwQElR9qmo-9L0xT2ihBdLGyQQ7Eu5QIu2FxRBb-ZCRMMmXiOtO0bzEVpNESauhtjEcSw/exec';

// function logEvent(eventType, details = {}) {
//   fetch(LOG_ENDPOINT, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ eventType, details, timestamp: new Date().toISOString() }),
//   }).catch(() => {});
// }

// // Log page view on load
// logEvent('page_view', { path: location.pathname, title: document.title });

// // Listen for clicks on elements marked with data-resume-download
// document.addEventListener('click', (e) => {
//   const el = e.target.closest('[data-resume-download]');
//   if (el) {
//     logEvent('resume_download', { path: location.pathname });
//   }
// });

/**
 * Add this file to your GitHub Pages repo, e.g. /assets/js/portfolio-logger.js.
 * Replace LOG_ENDPOINT with your deployed Apps Script URL ending in /exec.
 *
 * No admin password belongs in this file. Events are public client-side telemetry.
 */
(() => {
  'use strict';

  const LOG_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwQElR9qmo-9L0xT2ihBdLGyQQ7Eu5QIu2FxRBb-ZCRMMmXiOtO0bzEVpNESauhtjEcSw/exec';
  const VISITOR_KEY = 'portfolio_logger_visitor_id';
  const SESSION_KEY = 'portfolio_logger_session_id';

  function randomId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return 'xxxxxxxxyxxx4xxxyxxxyxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 3 | 8)).toString(16);
    });
  }

  function getOrCreate(key, storage) {
    try {
      let value = storage.getItem(key);
      if (!value) {
        value = randomId();
        storage.setItem(key, value);
      }
      return value;
    } catch (_) {
      return randomId();
    }
  }

  function logEvent(eventName) {
    if (!['page_view', 'resume_download'].includes(eventName)) return;
    if (!LOG_ENDPOINT.startsWith('https://script.google.com/macros/s/')) {
      console.warn('Portfolio logger: configure LOG_ENDPOINT in portfolio-logger.js');
      return;
    }

    const payload = {
      event: eventName,
      visitorId: getOrCreate(VISITOR_KEY, window.localStorage),
      sessionId: getOrCreate(SESSION_KEY, window.sessionStorage),
      page: window.location.pathname,
      referrer: document.referrer || '',
      userAgent: navigator.userAgent || ''
    };

    // text/plain + no-cors avoids a browser preflight for this fire-and-forget event.
    // The response is opaque in no-cors mode, so this confirms sending was attempted,
    // not that the server accepted or stored it.
    try {
      fetch(LOG_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(() => { });
    } catch (_) {
      // Analytics must never break the portfolio experience.
    }
  }

  // One page_view per page load; Apps Script also applies a brief duplicate throttle.
  logEvent('page_view');

  // Add data-resume-download to your resume link to track clicks.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-resume-download]');
    if (link) logEvent('resume_download');
  });

  // Optional manual API for SPAs or custom download handlers.
  window.portfolioLogger = { logEvent };
})();
