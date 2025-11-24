import { Injectable } from '@angular/core';

declare global {
  interface Window {
    _paq: any[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class CookieConsentService {
  private readonly COOKIE_NAME = 'cookie-consent';
  private readonly COOKIE_EXPIRY_DAYS = 365;

  constructor() {
    this.checkExistingConsent();
  }

  private checkExistingConsent(): void {
    const consent = this.getConsent();
    if (consent === 'accepted') {
      this.loadMatomoTracking();
    }
  }

  getConsent(): string | null {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === this.COOKIE_NAME) {
        return value;
      }
    }
    return null;
  }

  acceptCookies(): void {
    this.setConsentCookie('accepted');
    this.loadMatomoTracking();
  }

  declineCookies(): void {
    this.setConsentCookie('declined');
  }

  private setConsentCookie(value: string): void {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + this.COOKIE_EXPIRY_DAYS);
    document.cookie = `${this.COOKIE_NAME}=${value};expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
  }

  private loadMatomoTracking(): void {
    if (window._paq) {
      return;
    }

    window._paq = window._paq || [];
    window._paq.push(['trackPageView']);
    window._paq.push(['enableLinkTracking']);

    const u = 'https://robbyrunge.matomo.cloud/';
    window._paq.push(['setTrackerUrl', u + 'matomo.php']);
    window._paq.push(['setSiteId', '1']);

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.matomo.cloud/robbyrunge.matomo.cloud/matomo.js';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  }

  resetConsent(): void {
    document.cookie = `${this.COOKIE_NAME}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }
}
