import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileMenuOpen = false;
  isGerman = true;
  isDay = false;

  constructor(
    private elementRef: ElementRef,
    private translationService: TranslationService,
    private router: Router
  ) { }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.mobileMenuOpen) return;

    const mobileMenu = this.elementRef.nativeElement.querySelector('.mobile-menu');
    const hamburgerIcon = this.elementRef.nativeElement.querySelector('.hamburger-icon');

    if (mobileMenu && !mobileMenu.contains(event.target) &&
      hamburgerIcon && !hamburgerIcon.contains(event.target)) {
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  get languageButtonSrc(): string {
    return this.isGerman
      ? "/assets/imgs/header/german-button.png"
      : "/assets/imgs/header/english-button.png";
  }

  get languageButtonHoverSrc(): string {
    return this.isGerman
      ? "/assets/imgs/header/german-button-hover.png"
      : "/assets/imgs/header/english-button-hover.png";
  }

  get languageButtonAlt(): string {
    return this.isGerman ? "German button" : "English button";
  }

  get languageButtonHoverAlt(): string {
    return this.isGerman ? "German button hover" : "English button hover";
  }

  changeButton() {
    this.isGerman = !this.isGerman;
    const lang = this.isGerman ? 'de' : 'en';
    this.translationService.changeLang(lang);
    this.closeMobileMenu();
  }

  changeButtonDayAndNight() {
    this.isDay = !this.isDay;
    if (this.isDay) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    this.closeMobileMenu();
  }

  closeMobileMenu() {
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  onNavigationClick() {
    this.closeMobileMenu();
  }

  navigateToSection(section: string) {
    this.router.navigate(['/'], { fragment: section }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
    this.closeMobileMenu();
  }
}
