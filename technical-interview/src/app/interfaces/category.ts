export interface MenuResponse {
    error:     boolean;
    codigo:    string;
    message:   string;
    menuItems: Category[];
}

export interface Category {
    idMenu:      number;
    "descripción": string;
}


export interface BrandResponse {
  error:     boolean;
  codigo:    string;
  message:   string;
  menuItems: BrandItem[];
}

export interface BrandItem {
  idItem:      number;
  nombreMarca: string;
  imagen:      string;
  descripción: string;
}
