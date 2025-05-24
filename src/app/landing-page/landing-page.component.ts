import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
