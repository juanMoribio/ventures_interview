import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CategoriesService } from '../../services/categories.service';
import { BrandItem } from '../../interfaces/category';

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

  idCategory = input.required<number>();

  loading = signal(true);
  totalCoupons = signal(1);
  allCoupons = signal<BrandItem[]>([]);
  listCoupons = signal<BrandItem[]>([]);
  view = signal<'grid' | 'list'>('grid');

  dummyImage = signal('https://static.vecteezy.com/system/resources/previews/005/720/408/non_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg');

  categoryService = inject(CategoriesService);

  readonly pageSize = 12;
  skeletonCards = Array.from({ length: this.pageSize });
  hasMore = computed(() =>
    this.listCoupons().length < this.allCoupons().length
  );

  constructor() {
    effect(() => {
      this.loading.set(true);
      this.getBrands(this.idCategory());
    });
  }

  getBrands(idMenu: number): void {
    this.categoryService.getBrands(idMenu).subscribe({
      next: (response) => {
        this.totalCoupons.set(response.menuItems.length);
        this.allCoupons.set(response.menuItems);
        this.listCoupons.set(response.menuItems.slice(0, 12));
      },
      error: (error) => {
        console.error('Error fetching brands.', error)
      },
      complete: () => {
        if (this.totalCoupons() > 0) {
          this.loading.set(false);
        }
      }
    })
  }

  changeView(view: 'grid' | 'list') {
    this.view.set(view);
  }

  showMore(): void {

    const current = this.listCoupons().length;

    this.listCoupons.set(
      this.allCoupons().slice(0, current + this.pageSize)
    );

  }



}
