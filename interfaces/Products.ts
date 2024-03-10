export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
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