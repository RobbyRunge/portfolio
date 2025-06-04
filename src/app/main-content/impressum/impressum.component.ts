import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-impressum',
  imports: [TranslateModule],
  standalone: true,
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  showLegalNotice = false;

  constructor(private translationService: TranslationService) { }
}