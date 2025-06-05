import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header-compact',
  imports: [TranslateModule, FooterComponent],
  standalone: true,
  templateUrl: './header-compact.component.html',
  styleUrl: './header-compact.component.scss'
})
export class HeaderCompactComponent {
  isGerman = true;

  constructor(private translationService: TranslationService) { }

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
  }
}