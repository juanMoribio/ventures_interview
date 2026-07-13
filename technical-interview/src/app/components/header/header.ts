import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [MatButton, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {

}
