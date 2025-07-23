import { Product } from "./products.model";

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  product: Product;

}
