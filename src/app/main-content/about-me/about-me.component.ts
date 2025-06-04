import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    const profileContainer = document.getElementById('profile-container');
    const mainImage = profileContainer?.querySelector('img:not(.background-hover)');
    const backgroundImage = profileContainer?.querySelector('.background-hover');
    
    mainImage?.addEventListener('mouseenter', () => {
      backgroundImage?.classList.add('background-moved');
    });
  }
}
