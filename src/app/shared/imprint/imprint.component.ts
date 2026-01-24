import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-imprint',
  imports: [TranslateModule, FooterComponent, HeaderComponent],
  standalone: true,
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ImprintComponent {
}