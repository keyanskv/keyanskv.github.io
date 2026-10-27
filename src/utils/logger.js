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

function getOperatingSystem() {
  const ua = navigator.userAgent || "";

  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Android/i.test(ua)) return "Android";
  if (/Windows/i.test(ua)) return "Windows";
  if (/Macintosh|Mac OS X/i.test(ua)) return "macOS";
  if (/CrOS/i.test(ua)) return "ChromeOS";
  if (/Linux/i.test(ua)) return "Linux";

  return "Unknown";
}

function getBrowser() {
  const ua = navigator.userAgent || "";

  if (/Edg\//i.test(ua)) return "Edge";
  if (/OPR\//i.test(ua)) return "Opera";
  if (/Firefox\//i.test(ua)) return "Firefox";
  if (/Chrome\//i.test(ua)) return "Chrome";
  if (/Safari\//i.test(ua)) return "Safari";

  return "Unknown";
}

async function getPublicIP() {
  const services = [
    "https://api.ipify.org?format=json",
    "https://ipwho.is/"
  ];

  for (const url of services) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(
        () => controller.abort(),
        4000
      );

      try {
        const response = await fetch(url, {
          signal: controller.signal,
          cache: "no-store"
        });

        if (!response.ok) continue;

        const data = await response.json();

        const ip = data.ip;

        if (
          typeof ip === "string" &&
          /^[0-9a-fA-F:.]+$/.test(ip)
        ) {
          return ip;
        }
      } finally {
        clearTimeout(timeout);
      }
    } catch (error) {
      console.warn("IP service unavailable:", url);
    }
  }

  return "";
}
export async function logEvent(event, details = {}) {
  try {
    const ipAddress = await getPublicIP();

    const payload = {
      event,
      visitorId: getOrCreateId(
        localStorage,
        "portfolio_visitor_id"
      ),
      sessionId: getOrCreateId(
        sessionStorage,
        "portfolio_session_id"
      ),
      page: window.location.pathname,
      referrer: document.referrer || "",
      userAgent: navigator.userAgent || "",
      operatingSystem: getOperatingSystem(),
      browser: getBrowser(),
      ipAddress,
      details,
    };

    console.log("Portfolio event payload:", payload);

    await fetch(LOG_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (error) {
    console.error(
      "Portfolio logging request failed:",
      error
    );
  }
}
