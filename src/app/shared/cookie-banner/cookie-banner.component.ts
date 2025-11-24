import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentService } from '../cookie-consent.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss'
})
export class CookieBannerComponent implements OnInit {
  showBanner = false;

  constructor(
    private cookieConsentService: CookieConsentService
  ) {}

  ngOnInit(): void {
    const consent = this.cookieConsentService.getConsent();
    if (consent === null) {
      this.showBanner = true;
    }
  }

  acceptCookies(): void {
    this.cookieConsentService.acceptCookies();
    this.showBanner = false;
  }

  declineCookies(): void {
    this.cookieConsentService.declineCookies();
    this.showBanner = false;
  }
}
