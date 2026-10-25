
import { LOG_ENDPOINT } from "../config/logging.js";

function getOrCreateId(storage, key) {
  try {
    let id = storage.getItem(key);
    if (!id) {
      id = crypto.randomUUID();
      storage.setItem(key, id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

export function logEvent(event, details = {}) {
  const payload = {
    event,
    visitorId: getOrCreateId(localStorage, "portfolio_visitor_id"),
    sessionId: getOrCreateId(sessionStorage, "portfolio_session_id"),
    page: window.location.pathname,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    details,
  };

  fetch(LOG_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch((error) => {
    console.error("Portfolio logging request failed:", error);
  });
}
