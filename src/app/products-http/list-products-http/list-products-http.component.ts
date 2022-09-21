import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/products/products.model';
import { ProductsHttpService } from '../products-http.service';
@Component({
  selector: 'list-products-http',
  templateUrl: './list-products-http.component.html',
  styleUrls: ['./list-products-http.component.css']
})
export class ListProductsHttpComponent implements OnInit {

  showAddProductForm: boolean = false;
  allProducts: ProductModel[] = [];

  newProduct: ProductModel = {
    productID : 0,
    productName: "",
    productDesc: "",
    productImg: "",
    productCost: 0
  }

  constructor(private productService: ProductsHttpService,
    private router:Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void{
    this.productService.getAllProducts().subscribe((response)=>{
      this.allProducts = response;
    });
  }

  deleteProduct(id : number){
    this.productService.deleteProduct(id).subscribe((Response)=>{
      this.loadProducts();
    });
  }

  editProduct(id: number){
    
    this.router.navigate(["edit-products-http",id]);
  }

  addProduct(): void{
    this.productService.addProduct(this.newProduct).subscribe((Response)=>{
      this.toggleProductForm();
      this.loadProducts();
    });
  }

  toggleProductForm(): void{
    this.showAddProductForm = !this.showAddProductForm;
  }

  logTittle(ptittle: any){
    console.log(ptittle);
  }
}
