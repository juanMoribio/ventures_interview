import { Injectable, Signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private translate = inject(TranslateService);

  readonly languages = [
    {
      code: 'en',
      label: 'English'
    },
    {
      code: 'es',
      label: 'Español'
    }
  ];

  constructor() {
    this.translate.addLangs(['en', 'es']);

    const lang = 'en';

    this.changeLanguage(lang);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  get currentLanguage() {
    return this.translate.currentLang;
  }
}