import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (!event.url.includes('#') && event.url !== '/') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
      // Refresh AOS after route change
      AOS.refresh();
    })
  }
}
