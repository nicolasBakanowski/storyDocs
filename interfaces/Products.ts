export interface Brand {
  id: number;
  name: string;
  logo_url: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  id_brand:number
  brand: Brand;
}

export interface createProduct{
  name: string;
  description: string;
  price: number;
  image_url: string;
  id_brand: number;

}

interface ProductState {
  products: Product[];
  currentProduct: Product | null;
}

export const initialState: ProductState = {
  products: [],
  currentProduct: null,
};

export interface ProductEdit{
  name: string;
  price: number;
  description: string;
}