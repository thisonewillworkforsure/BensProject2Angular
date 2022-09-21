import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../products.model';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  updatedProduct :ProductModel = {
    productID: 0,
    productDesc: "",
    productImg: "",
    productName: "",
    productCost: 0
  }

  constructor(private activatedRoute : ActivatedRoute,
    private productService: ProductServiceService,
    private router : Router) { }

  ngOnInit(): void {
      // in order to take out the route parameter from the url we need an API called ActivatedRoute
    // inject ActivatedRoute through the constructor
    let productId : any = this.activatedRoute.snapshot.paramMap.get("pid");

    this.updatedProduct = this.productService.getOneProduct(productId);
    console.log(this.updatedProduct.productID + " " + this.updatedProduct.productName);
  }

  updateProduct() : void{
    console.log("oh boy at update now");
    this.productService.updateProduct(this.updatedProduct);

    this.router.navigate(["list-products"]);
  }

}
