
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products'; // Express API URL

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add new product
  addProduct(product: any): Observable<any> {
    // ✅ Ensure _id is number before sending
    product._id = Number(product._id);
    product.pPrice = Number(product.pPrice);
    return this.http.post(this.apiUrl, product);
  }

  // Update product
  updateProduct(id: number, product: any): Observable<any> {
    product._id = Number(product._id);
    product.pPrice = Number(product.pPrice);
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  // Delete product
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
