import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderCompactComponent } from "../shared/header-compact/header-compact.component";

@Component({
  selector: 'app-impressum',
  imports: [TranslateModule, FooterComponent, HeaderCompactComponent],
  standalone: true,
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImpressumComponent {
}