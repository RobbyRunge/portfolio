import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showLegalNotice = false;

  openLegalNotice(event: Event): void {
    event.preventDefault();
    this.showLegalNotice = true;
    document.body.style.overflow = 'hidden';
  }

  closeLegalNotice(): void {
    this.showLegalNotice = false;
    document.body.style.overflow = '';
  }
}
