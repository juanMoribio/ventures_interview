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
