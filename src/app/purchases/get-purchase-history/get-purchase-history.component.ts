import { Component, OnInit } from '@angular/core';
import { PurchaseModel } from '../purchases.model';
import { PurchasesService } from '../purchases.service';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/products/products.model';
import { ProductsHttpService } from 'src/app/products-http/products-http.service';
import { CartModel } from 'src/app/shopping/cart.model';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'get-purchase-history',
  templateUrl: './get-purchase-history.component.html',
  styleUrls: ['./get-purchase-history.component.css']
})
export class GetPurchaseHistoryComponent implements OnInit {

  userId: any = 0;
  allPurchases: PurchaseModel[] = [];

  allProducts: ProductModel[] = []

  TEST : boolean = false;

  constructor(private purchaseService: PurchasesService,
    private productService: ProductsHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService) { }

  ngOnInit(): void {

    this.userId = this.activatedRoute.snapshot.paramMap.get("pid");
    this.loadPurchasesAndProducts();

  }

  loadPurchasesAndProducts(): void {
    this.purchaseService.getPurchaseHistoryForUser(this.userId).subscribe((Response) => {
      this.allPurchases = Response;
      this.productService.getAllProducts().subscribe((Response) => {
        this.allProducts = Response;
        console.log(this.allProducts);
        console.log(this.allPurchases);
      });
    });

  }

  loadPurchases(): void {
    this.purchaseService.getPurchaseHistoryForUser(this.userId).subscribe((Response) => {
      this.allPurchases = Response;
      console.log(this.allPurchases);
      console.log("this was load purchases baby, the one called first");
    });
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((Response) => {
      this.allProducts = Response;
      console.log(this.allProducts);
      console.log("this was load products baby, the one called second");
    });
  }

  getProductName(productID: number) : string{
    for(let eachProduct of this.allProducts){
      if(eachProduct.productID == productID){
        return eachProduct.productName;
      }
    }
    return "";
  }

  getProductCost(productID: number) : number{
    for(let eachProduct of this.allProducts){
      if(eachProduct.productID == productID){
        return eachProduct.productCost;
      }
    }
    return 0;
  }

  getShoppingItems(purchaseModel : PurchaseModel): CartModel[]{
    console.log("OK IT IS BEING CALLED");
    console.log(purchaseModel);
    console.log(purchaseModel.shoppingCartItemPojos.length);
    return purchaseModel.shoppingCartItemPojos;
  }

  goToProfileMenu():void{
    this.router.navigate([`get-profile/${this.userId}`]);
  }

  goToHomePage():void{
    this.router.navigate(['logout-user']);
  }

  isCustomer():boolean{
    return this.globalService.isCustomer();
  }
}
