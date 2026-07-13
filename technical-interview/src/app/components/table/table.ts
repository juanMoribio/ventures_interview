import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  imports: [MatButton, MatIconModule, TranslatePipe],
  templateUrl: './table.html',
  styleUrl: './table.css',
  standalone: true
})
export class Table {
   readonly rows = signal([
    {text:'COUPONS', noLinkedBenefit: true},
    {text:'VISA', noLinkedBenefit: false},
    {text:'TRACKING', noLinkedBenefit: false},
    {text:'MERCHANT', noLinkedBenefit: false},
    {text:'OFFERS', noLinkedBenefit: false}
  ]);
}
