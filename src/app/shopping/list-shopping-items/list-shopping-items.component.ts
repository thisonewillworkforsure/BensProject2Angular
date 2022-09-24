import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from 'src/app/products-http/products-http.service';
import { ProductModel } from 'src/app/products/products.model';
import { CartModel } from '../cart.model';
import { ShoppingService } from '../shoppingCart.service';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this.activatedRoute.snapshot.paramMap.get("userID");
    this.loadCartAndProducts();
  }

  loadCartAndProducts(): void {
    this.loadCart();
    this.loadProducts();
  }

  loadCart(): void {
    console.log("in shopping cart!");
    this.shoppingService.getAllCartItemsForUser(this.userID).subscribe((Response) => {
      this.allCartItems = Response;
      console.log(this.allCartItems);
      console.log("that was shopping cart items");
    });
  }

  loadProducts(): void {
    console.log("in load products");
    this.productService.getAllProducts().subscribe((Response) => {
      this.allProducts = Response;
      console.log(this.allProducts);
    })
  }

  getAmountOfProductInCart(productID: number): number {
    for (let eachCart of this.allCartItems) {
      if (eachCart.productID == productID) {
        console.log(eachCart.quantity);
        return eachCart.quantity;
      }
    }
    console.log(0);
    return 0;
  }

  getShoppingObject(productID: number): CartModel {
    for (let eachCart of this.allCartItems) {
      if (eachCart.productID == productID) {
        console.log(eachCart.quantity);
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
}
