import { Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-detail',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    TranslatePipe,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
  standalone: true,
})
export class Detail {
  loading = signal(true);

  totalCoupons = signal(34);

  view = signal<'grid' | 'list'>('grid');

  skeletonCards = Array.from({ length: 12 });

  changeView(view: 'grid' | 'list') {
    this.view.set(view);
  }
}
