import { AfterViewInit, Component } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { FeaturedProjectsComponent } from "./featured-projects/featured-projects.component";
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { FooterComponent } from './footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillsComponent, FeaturedProjectsComponent, ColleaguesComponent, ContactMeComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements AfterViewInit {
  title = 'portfolio';

  ngAfterViewInit() {
    this.initCustomCursor();
  }

  initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;

    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });

      document.querySelectorAll('a, button, img').forEach(item => {
        item.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1.2)';
        });

        item.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
      });
    }
  }
}
