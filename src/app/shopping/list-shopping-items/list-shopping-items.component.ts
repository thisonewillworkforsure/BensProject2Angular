import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from 'src/app/products-http/products-http.service';
import { ProductModel } from 'src/app/products/products.model';
import { CartModel } from '../cart.model';
import { ShoppingService } from '../shoppingCart.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global/global.service';
import { Router } from '@angular/router';
import { PurchasesService } from 'src/app/purchases/purchases.service';
import { PurchaseModel } from 'src/app/purchases/purchases.model';
@Component({
  selector: 'list-shopping-items',
  templateUrl: './list-shopping-items.component.html',
  styleUrls: ['./list-shopping-items.component.css']
})
export class ListShoppingItemsComponent implements OnInit {

  userID: any = 0;

  allProducts: ProductModel[] = [];

  allCartItems: CartModel[] = [];

  constructor(private shoppingService: ShoppingService,
    private productService: ProductsHttpService,
    private activatedRoute: ActivatedRoute,
    private globalService : GlobalService,
    private router : Router,
    private purchaseService: PurchasesService) { }

  ngOnInit(): void {
    this.globalService.setIsCheckingOut(false);
    this.userID = this.activatedRoute.snapshot.paramMap.get("userID");
    this.loadCartAndProducts();
    sessionStorage.setItem("isShopping","true");
    this.globalService.setIsShopping(true);
  }

  loadCartAndProducts(): void {
    this.loadCart();
    this.loadProducts();
  }

  loadCart(): void {
    this.shoppingService.getAllCartItemsForUser(this.userID).subscribe((Response) => {
      this.allCartItems = Response;
      this.globalService.setCartLength(this.allCartItems.length);
    });
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((Response) => {
      this.allProducts = Response;
    })
  }

  getAmountOfProductInCart(productID: number): number {
    for (let eachCart of this.allCartItems) {
      if (eachCart.productID == productID) {
        return eachCart.quantity;
      }
    }
    return 0;
  }

  getShoppingObject(productID: number): CartModel {
    for (let eachCart of this.allCartItems) {
      if (eachCart.productID == productID) {
        return eachCart;
      }
    }
    let notFoundModel: CartModel = {
      shoppingID: -1,
      userID: -1,
      productID: -1,
      quantity: -1,
      shoppingStatusID: -1
    }
    return notFoundModel;
  }

  getProductName(productID : number) : string{
    let productM : ProductModel = this.getProductObject(productID);
    return productM.productName;
  }

  getProductCost(productID : number) : number{
    let productM : ProductModel = this.getProductObject(productID);
    return productM.productCost;
  }

  getProductObject( productID : number) : ProductModel{
    for (let eachProduct of this.allProducts) {
      if (eachProduct.productID == productID) {
        return eachProduct;
      }
    }
    let notFoundModel: ProductModel = {
      productID : -1,
      productName: "",
      productDesc: "",
      productImg: "",
      productCost: -1
    }
    return notFoundModel;
  }

  increaseAmountOfItemInCart(productID: number, amount: number): void {
    let cart: CartModel = this.getShoppingObject(productID);

    if (cart.shoppingID != -1) {
      cart.quantity = cart.quantity + 1;
      this.shoppingService.updateCartItem(cart).subscribe((Response)=>{
        this.loadCart();
      });
    }
    else{
      //it wasn't found, so have to make the item
      cart = {
        shoppingID: 300,
        userID: this.userID,
        productID: productID,
        quantity: amount,
        shoppingStatusID: 1
      }

      this.shoppingService.createCartItem(cart).subscribe((Response)=>{
        this.loadCart();
      });
    }
  }

  decreaseAmountOfItemInCart(productID: number, amount: number): void{
    let cart: CartModel = this.getShoppingObject(productID);
    
    if(cart.shoppingID != -1){//so it is found
      if(cart.quantity - amount <= 0){ //0 quantity items get deleted
        this.shoppingService.deleteCartItem(cart.shoppingID).subscribe((Response)=>{
          this.loadCart();
        });
      }
      else{
        cart.quantity = cart.quantity - amount;
        this.shoppingService.updateCartItem(cart).subscribe((Response)=>{
          this.loadCart();
        });
      }
    }
  }

  getTotalCost() : number{
    let sum : number = 0;
    for(let eachCart of this.allCartItems){
      sum += (this.getProductCost(eachCart.productID) * eachCart.quantity);
    }
    return sum;
  }

  isCheckingOut() : boolean{
    return this.globalService.isCheckingOut;
  }

  createPurchase(): void{
    let newPurchase : PurchaseModel = {

      purchaseID : 0,
      userID: this.userID,
      totalCost: this.getTotalCost(),
      purchaseDate: this.getCurrentDate(),
      shoppingCartItemPojos: this.allCartItems
    };
    this.purchaseService.createPurchase(newPurchase).subscribe((Response)=>{
      let id : any = Response.purchaseID;
      sessionStorage.setItem("purchaseID",id);
      this.router.navigate(["create-purchase", {cart:this.allCartItems,}]);
    });
    
  }

  isCartEmpty(): boolean{
    return this.allCartItems.length == 0;
  }

  getCurrentDate(): string{
    const today = new Date();
const yyyy = today.getFullYear();
let mm : any = today.getMonth() + 1;
let dd : any = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

return mm + '-' + dd + '-' + yyyy;
  }
}
