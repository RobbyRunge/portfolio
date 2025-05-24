import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>('de');
  public currentLang$ = this.currentLangSubject.asObservable();

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    
    translate.setDefaultLang('de');
    
    this.changeLang('de');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.currentLangSubject.next(lang);
    
    document.documentElement.lang = lang;
  }
}