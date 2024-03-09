export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
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

