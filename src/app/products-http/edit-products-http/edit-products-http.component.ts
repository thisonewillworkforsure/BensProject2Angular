import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/products.model';
import { ProductsHttpService } from '../products-http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'edit-products-http',
  templateUrl: './edit-products-http.component.html',
  styleUrls: ['./edit-products-http.component.css']
})
export class EditProductsHttpComponent implements OnInit {

  updProduct: ProductModel = {
    productID : 0,
    productName: "",
    productDesc: "",
    productImg: "",
    productCost: 0
  }


  constructor(private productService : ProductsHttpService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("initialing edit! id atm is: " + 555);
    let productID: any = this.activatedRoute.snapshot.paramMap.get("pid");

    console.log("initialing edit! id atm is: " + productID);
    this.productService.getOneProduct(productID).subscribe((response)=>{
      this.updProduct = response;
    });
  }

  updateProduct(): void{
    this.productService.updateProduct(this.updProduct).subscribe((Response)=>{
      this.router.navigate(["list-products-http"]);
    });
  }

 
}
