import { Injectable } from '@angular/core';
import { UserModel } from '../users/users.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  cartLength: number = 0;

  isShopping: boolean = false;

  isCheckingOut: boolean = false;

  currentUser: UserModel = {
    userID: 0,
    typeID: 0,
    userName: "",
    userPassword: "",
    statusID: 0
  }


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
  
  setIsCheckingOut(isCheck : boolean): void{
    this.isCheckingOut = isCheck;
  }

  toggleIsCheckingOut() : void{
    this.isCheckingOut = !this.isCheckingOut;
  }

  isGuest() : boolean{
    return this.currentUser.typeID == 3;
  }

  isCustomer() : boolean{
    return this.currentUser.typeID == 2;
  }

  isAdmin() : boolean{
    return this.currentUser.typeID == 1;
  }

  setCurrentUser(userModel : UserModel): void{
    this.currentUser = userModel;
  }

  getUserID() : number{
    return this.currentUser.userID;
  }
}
