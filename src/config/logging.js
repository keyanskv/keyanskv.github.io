
export const LOG_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbwQElR9qmo-9L0xT2ihBdLGyQQ7Eu5QIu2FxRBb-ZCRMMmXiOtO0bzEVpNESauhtjEcSw/exec";

function getOrCreateId(storage, key) {
    try {
        let id = storage.getItem(key);

        if (!id) {
            id = crypto.randomUUID();
            storage.setItem(key, id);
        }

        return id;
    } catch {
        // Fallback if browser storage is unavailable.
        return crypto.randomUUID();
    }
}

export function logEvent(event, details = {}) {
    if (!["page_view", "resume_download"].includes(event)) {
        console.warn("Unknown portfolio event:", event);
        return;
    }

    const payload = {
        event,
        visitorId: getOrCreateId(localStorage, "portfolio_visitor_id"),
        sessionId: getOrCreateId(sessionStorage, "portfolio_session_id"),
        page: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        // Optional details are not required by the current Apps Script.
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
        console.error("Portfolio logging network failure:", error);
    });
}
