import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule]
})
export class FooterComponent {

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {}

  navigateToImpressum(): void {
    this.router.navigate(['/impressum']);
  }
}
