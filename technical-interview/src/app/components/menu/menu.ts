import { Component, inject, output, signal } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';
import { MatChipsModule } from '@angular/material/chips';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  imports: [MatChipsModule, TranslatePipe ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  private readonly categoriesService = inject(CategoriesService);

  readonly categories = signal<Category[]>([]);
  readonly selectedCategory = signal<number | null>(null);

  readonly categorySelected = output<number>();

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void{

    this.categoriesService.getCategories()
      .subscribe({
        next: (menu) => {
          this.categories.set(menu.menuItems);

          if (menu.menuItems.length) {
            this.selectedCategory.set(menu.menuItems[0].idMenu);
            this.categorySelected.emit(menu.menuItems[0].idMenu);
          }
        },
        error: (error) => {
          console.error('Error fetching categories: ', error);
        }
      });

  }

  selectCategory(category:Category): void{

    this.selectedCategory.set(category.idMenu);
    this.categorySelected.emit(category.idMenu);

  }
}
