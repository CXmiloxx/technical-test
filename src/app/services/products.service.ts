import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products.model';
import { ProductResponse } from '../models/productsResponse.model';

const API_URL = 'https://dummyjson.com/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(API_URL);
  }

  getProductsById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/${id}`);
  }
  createProduct(data: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(`${API_URL}/add`, data);
  }
  updateProduct(id: number, data: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/${id}`, data);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/${id}`);
  }
}
