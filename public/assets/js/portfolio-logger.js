
export const LOG_ENDPOINT =
  'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

export function logEvent(eventName) {
  const payload = {
    event: eventName,
    visitorId: getOrCreate('portfolio_logger_visitor_id', localStorage),
    sessionId: getOrCreate('portfolio_logger_session_id', sessionStorage),
    page: window.location.pathname,
    referrer: document.referrer || '',
    userAgent: navigator.userAgent || ''
  };

  fetch(LOG_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(error => {
    console.error('Log request failed:', error);
  });
}
