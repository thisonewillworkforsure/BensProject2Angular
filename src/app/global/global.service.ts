import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  cartLength: number = 0;

  isShopping: boolean = false;

  constructor() { }

  setCartLength(n : number) : void{
    this.cartLength = n;
  }

  getCartLength() : number{
    return this.cartLength;
  }

  setIsShopping(isShop : boolean): void{
    this.isShopping = isShop;
  }

  isCustomerShopping(): boolean{
    return this.isShopping;
  }
  
}
