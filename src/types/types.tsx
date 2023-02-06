export interface Product {
  id: number;
  name: string;
  color: string;
  pantoneValue: string;
  year: number;
}
export interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
}
export interface FilterProps {
  id: number;
}
