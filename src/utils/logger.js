import { LOG_ENDPOINT } from '../config/logging';

/**
 * Log an event to the remote logging endpoint.
 * @param {string} eventType - Type of the event (e.g., 'visit', 'resume_download').
 * @param {object} details - Additional details about the event.
 */
export async function logEvent(eventType, details = {}) {
  try {
    await fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType,
        details,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    // Silently fail – logging should not break the UI.
    console.error('Logging failed', err);
  }
}
