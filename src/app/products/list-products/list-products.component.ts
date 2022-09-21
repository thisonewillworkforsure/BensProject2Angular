import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../products.model';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  newProduct :ProductModel = {
    productID: 0,
    productDesc: "",
    productImg: "",
    productName: "",
    productCost: 0
  }
  allProducts : ProductModel[] = [];
  showAddProductForm: boolean = false;
  constructor(private productService : ProductServiceService,
    private router : Router) { }

  ngOnInit(): void {
    this.allProducts = this.loadProducts();
  }

  loadProducts() : ProductModel[]{
    return this.productService.getAllProducts();
  }

  deleteProduct(id:number) : void{
    console.log("deleting ID at: " + id);
    this.productService.deleteProduct(id);

    this.loadProducts();
  }

  editProduct(id:number) : void{
    //this.productService.updateProduct(id);
    console.log("calling the edit product function!")
    this.router.navigate(["edit-products",id]);
  } 

  addProduct() : void{
    console.log("kind of yay");
    console.log(this.newProduct);
    this.productService.createProduct(this.newProduct);
    
    this.allProducts = this.loadProducts();
    this.newProduct = {
      productID: 0,
      productDesc: "",
      productImg: "",
      productName: "",
      productCost: 0
    }
    this.showAddProductForm = false;
  }

  toggleProductForm() : void{
    this.showAddProductForm = !this.showAddProductForm;
  }

  logTittle(pTittle : any) :void{
    console.log(pTittle);
  }
}
