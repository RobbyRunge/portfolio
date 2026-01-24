import { Component, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-data-protection',
  imports: [TranslateModule, FooterComponent, HeaderComponent],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DataProtectionComponent {

}
