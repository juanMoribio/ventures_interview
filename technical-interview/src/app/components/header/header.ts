import { Component, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { LoginModalComponent } from '../login-modal/login-modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  imports: [MatButton, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {

  dialog = inject(MatDialog);

  openLogin(){
    this.dialog.open(LoginModalComponent,{
      width:'420px',
      autoFocus:false
    });
  }

}
