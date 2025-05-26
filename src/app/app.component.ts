import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent, AboutMeComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
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