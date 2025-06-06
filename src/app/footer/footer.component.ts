import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule]
})
export class FooterComponent {
  showLegalNotice = false;

  constructor(private translationService: TranslationService) {}

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
