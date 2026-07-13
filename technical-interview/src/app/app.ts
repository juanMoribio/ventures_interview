import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('technical-interview');

  private translate = inject(TranslateService);

  constructor() {

    this.translate.addLangs(['es', 'en']);

    this.translate.use('en');

  }
}
