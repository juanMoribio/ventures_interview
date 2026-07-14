import { Component, effect, inject, input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CategoriesService } from '../../services/categories.service';
import { BrandItem } from '../../interfaces/category';
import { firstValueFrom } from 'rxjs';

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
  categoryList = signal<number[]>([]);
  private readonly maxBrands = 4;
  loading = signal(true);
  brands = signal<BrandItem[]>([]);
  categoryService = inject(CategoriesService);
  skeletonCards = Array.from({ length: this.maxBrands });

  constructor() {
    this.loading.set(true);
    this.getCategories();
  }

  getCategories() : void {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.categoryList.set(response.menuItems.map(item => item.idMenu).slice(0, 4));
      },
      error: (error) => {
        console.error('Error fetching categories in brand', error);
        this.loading.set(true);
      },
      complete: async () => {
        if (this.categoryList().length > 0) {
          await this.loadBrands();
        }
      }
    })
  }

  async loadBrands() {
    const brands = await Promise.all(
      this.categoryList().map(id => this.getFirstBrand(id))
    );
    console.log(brands)
    this.brands.set(brands);
    this.loading.set(false);
  }

  async getFirstBrand(idMenu: number): Promise<BrandItem> {
    const response = await firstValueFrom(
      this.categoryService.getBrands(idMenu)
    );
    return response.menuItems[0];
  }
}
