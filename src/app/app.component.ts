import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { IntroComponent } from './shared/intro/intro.component';
// import { CookieBannerComponent } from './shared/cookie-banner/cookie-banner.component';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroComponent], // CookieBannerComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  showIntro = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private titleService: Title,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const alreadyShown = sessionStorage.getItem('intro_shown');
      const isHome = window.location.pathname === '/';
      this.showIntro = !alreadyShown && isHome;
      if (this.showIntro) {
        sessionStorage.setItem('intro_shown', '1');
      }
    }

    this.setTranslatedTitle();
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedTitle();
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
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    });
  }

  private setTranslatedTitle() {
    this.translate.get('HERO.JOB_TITLE').subscribe((translated: string) => {
      this.titleService.setTitle(`Robby Runge - ${translated}`);
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        AOS.init({
          duration: 1000,
          once: false,
          offset: 200,
          delay: 100,
          easing: 'ease-in-out',
          mirror: false,
          anchorPlacement: 'top-bottom'
        });
      }, 100);
    }
  }
}
