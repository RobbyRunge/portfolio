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
  constructor(private translationService: TranslationService) { }
}