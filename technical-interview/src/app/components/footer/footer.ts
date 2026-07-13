import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [
    MatSelectModule,
    FormsModule,
    TranslatePipe,],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  languageService = inject(LanguageService);
  language = signal('')

  ngOnInit(): void {
    this.language.set(this.languageService.currentLanguage() ?? 'en')
  }

  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
    this.language.set(language);
  }
}
