import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.object';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpRequest: HttpClient) { }

  // getProducts(): Observable<any>{
  //   return this.httpRequest.get('https://622b0e5f14ccb950d22d8142.mockapi.io/api/vi/e-Commerce/product');
}

// addProduct(product: Product): Observable<any>{
//   return this.httpRequest.post('https://622b0e5f14ccb950d22d8142.mockapi.io/api/vi/e-Commerce/product', product);
// }



