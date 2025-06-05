import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/translation.service';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-impressum',
  imports: [TranslateModule, FooterComponent],
  standalone: true,
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImpressumComponent {
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