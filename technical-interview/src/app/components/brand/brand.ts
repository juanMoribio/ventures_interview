import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-brand',
  imports: [
    MatCardModule,
    MatButtonModule,
    TranslatePipe,
    NgxSkeletonLoaderModule],
  templateUrl: './brand.html',
  styleUrl: './brand.css',
})
export class Brand {
  cards = Array(4);
}
