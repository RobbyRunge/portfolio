import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderCompactComponent } from "../header-compact/header-compact.component";

@Component({
  selector: 'app-imprint',
  imports: [TranslateModule, FooterComponent, HeaderCompactComponent],
  standalone: true,
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
}