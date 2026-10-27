
export const LOG_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwQElR9qmo-9L0xT2ihBdLGyQQ7Eu5QIu2FxRBb-ZCRMMmXiOtO0bzEVpNESauhtjEcSw/exec';

function getOperatingSystem() {
  const ua = navigator.userAgent || '';

  if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS';
  if (/Android/i.test(ua)) return 'Android';
  if (/Windows/i.test(ua)) return 'Windows';
  if (/Macintosh|Mac OS X/i.test(ua)) return 'macOS';
  if (/CrOS/i.test(ua)) return 'ChromeOS';
  if (/Linux/i.test(ua)) return 'Linux';

  return 'Unknown';
}

function getBrowser() {
  const ua = navigator.userAgent || '';

  if (/Edg\//i.test(ua)) return 'Edge';
  if (/OPR\//i.test(ua)) return 'Opera';
  if (/Firefox\//i.test(ua)) return 'Firefox';
  if (/Chrome\//i.test(ua)) return 'Chrome';
  if (/Safari\//i.test(ua)) return 'Safari';

  return 'Unknown';
}

async function getPublicIP() {
  try {
    const response = await Promise.race([
      fetch('https://api.ipify.org?format=json'),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('IP lookup timeout')), 2000)
      )
    ]);

    if (!response.ok) return '';

    const data = await response.json();
    return typeof data.ip === 'string' ? data.ip : '';
  } catch (error) {
    console.warn('IP lookup unavailable:', error);
    return '';
  }
}

export async function logEvent(eventName) {
  try {
    const payload = {
      event: eventName,
      visitorId: getOrCreate(
        'portfolio_logger_visitor_id',
        localStorage
      ),
      sessionId: getOrCreate(
        'portfolio_logger_session_id',
        sessionStorage
      ),
      page: window.location.pathname,
      referrer: document.referrer || '',
      userAgent: navigator.userAgent || '',
      operatingSystem: getOperatingSystem(),
      browser: getBrowser(),
      ipAddress: await getPublicIP()
    };

    console.log('Sending analytics event:', payload);

    await fetch(LOG_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      },
      body: JSON.stringify(payload),
      keepalive: true
    });

    console.log('Analytics request sent.');
  } catch (error) {
    console.error('Analytics logging failed:', error);
  }
}
