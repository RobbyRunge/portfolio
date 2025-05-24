import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileMenuOpen = false;

  constructor(private elementRef: ElementRef) {}

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
}
