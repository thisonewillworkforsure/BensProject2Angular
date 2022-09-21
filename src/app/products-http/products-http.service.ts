import { Injectable } from '@angular/core';
import { ProductModel } from '../products/products.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  baseUrl: string = "http://localhost:8080/api/products"

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(this.baseUrl);
  }

  addProduct(newProduct: ProductModel): Observable<ProductModel>{
    return this.httpClient.post<ProductModel>(this.baseUrl,newProduct);
  }

  updateProduct(newProduct: ProductModel): Observable<ProductModel>{
    return this.httpClient.put<ProductModel>(this.baseUrl,newProduct);
  }

  deleteProduct(productID: number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl + "/" + productID);
  }

  getOneProduct(productID: number):Observable<ProductModel>{
    return this.httpClient.get<ProductModel>(this.baseUrl + "/" + productID);
  }
}
