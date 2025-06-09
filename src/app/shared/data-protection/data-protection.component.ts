import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderCompactComponent } from "../header-compact/header-compact.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-data-protection',
  imports: [TranslateModule, FooterComponent, HeaderCompactComponent],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})
export class DataProtectionComponent {

}
