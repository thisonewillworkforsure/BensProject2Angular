import { Injectable } from '@angular/core';
import { CartModel } from './cart.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  baseUrl : string = "http://localhost:8080/api/shops";

  constructor(private httpClient : HttpClient) { }

  getAllCartItemsForUser(userID : number) : Observable<CartModel[]>{
    return this.httpClient.get<CartModel[]>(this.baseUrl);
  }

  createCartItem(cartItem : CartModel) : Observable<CartModel>{
    return this.httpClient.post<CartModel>(this.baseUrl,cartItem);
  }

  updateCartItem(cartItem : CartModel) : Observable<CartModel>{
    return this.httpClient.put<CartModel>(this.baseUrl,cartItem);
  }

  deleteCartItem(shoppingID : number) : Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl + "/" + shoppingID);
  }

}




