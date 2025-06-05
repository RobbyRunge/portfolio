import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/translation.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule, RouterModule]
})
export class FooterComponent {

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {}
}
