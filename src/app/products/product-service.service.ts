import { Injectable } from '@angular/core';
import { ProductModel } from './products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  allProducts: ProductModel[] = [
    {
      productID: 1,
      productName: "Green Herb",
      productDesc: "Heals your health",
      productImg: "",
      productCost: 100
    },

    {
      productID: 2,
      productName: "Red Herb",
      productDesc: "Helps to Heals your health",
      productImg: "",
      productCost: 200
    },

    {
      productID: 3,
      productName: "Blue Herb",
      productDesc: "Cures Poison",
      productImg: "",
      productCost: 300
    }
]

  constructor() { }

  //Read
  getAllProducts() : ProductModel[]{
    return this.allProducts;
  }

  getOneProduct(id : number) : ProductModel{
    for(let i = 0; i < this.allProducts.length;i++){
      if(this.allProducts[i].productID == id){
        return this.allProducts[i];
      }
    }
    return {
      productID: 0,
      productCost: 0,
      productDesc: "",
      productImg: "",
      productName: "nope"
    }
  } 


  createProduct(productModel : ProductModel) : ProductModel{
    let id : number = this.allProducts.length + 1;
    productModel.productID = id;
    this.allProducts.push(productModel);
    return productModel;
  }


  //Update
  updateProduct(productModel: ProductModel) : ProductModel{
    let id : number = productModel.productID;
    
    for(let i = 0; i < this.allProducts.length; i++){
      if(id === this.allProducts[i].productID){
        this.allProducts[i] = productModel;
        break;
      }
    }
    return productModel;
  }

  deleteProduct(id: number) : void{
    console.log("In service now! deleting ID at: " + id);
    let index : number = 0;
    console.log("length before filter is: " + this.allProducts.length);
    for(let i = 0; i < this.allProducts.length;i++){
      if(this.allProducts[i].productID === id){
        console.log("have a match between: " + this.allProducts[i].productID + " and for entered id: " + id);
        index = i;
        this.allProducts.splice(index,1);
        break;
      }
      
    }
    //this.allProducts.filter((eachProduct)=>eachProduct.productID != id);
    console.log("length after filter is: " + this.allProducts.length);

  }

  removeItem<T>(arr: Array<T>, value: T): Array<T> { 
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
}
