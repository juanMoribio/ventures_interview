import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../env/environment';
import { BrandResponse, MenuResponse } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
    private http = inject(HttpClient);
    private url = environment.api_url;

    getCategories(): Observable<MenuResponse> {
        return this.http.get<MenuResponse>(`${this.url}/Categorias`);
    }

    getCategoriesMenu(idMenu: number): Observable<MenuResponse> {
        const params = new HttpParams()
                        .set('idMenu', idMenu);
        return this.http.get<MenuResponse>(`${this.url}/Categorias`, {params: params});
    }

    getBrands(idMenu: number): Observable<BrandResponse> {
        const params = new HttpParams()
                        .set('idMenu', idMenu);
        return this.http.get<BrandResponse>(`${this.url}/Marcas`, {params: params});
    }
}

