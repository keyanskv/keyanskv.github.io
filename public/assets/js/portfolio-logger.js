/* portfolio-logger.js – logs page views and resume downloads */
const LOG_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwQElR9qmo-9L0xT2ihBdLGyQQ7Eu5QIu2FxRBb-ZCRMMmXiOtO0bzEVpNESauhtjEcSw/exec';

function logEvent(eventType, details = {}) {
  fetch(LOG_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventType, details, timestamp: new Date().toISOString() }),
  }).catch(() => { });
}

// Log page view on load
logEvent('page_view', { path: location.pathname, title: document.title });

// Listen for clicks on elements marked with data-resume-download
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-resume-download]');
  if (el) {
    logEvent('resume_download', { path: location.pathname });
  }
});
