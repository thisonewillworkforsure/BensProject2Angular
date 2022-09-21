import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  allProducts = [{
    productID: 1,
    productName: "Green Herb",
    description: "Heals your health",
    productImg: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    product_cost: 100
  },
  {
    productID: 2,
    productName: "Red Herb",
    description: " Helps to Heals your health",
    productImg: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    product_cost: 150
  },
  {
    productID: 3,
    productName: "Blue Herb",
    description: "Cures Poison",
    productImg: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    product_cost: 200
  }];

  deleteProduct(product_ID: number){
    console.log(product_ID);
    this.allProducts = this.allProducts.filter((eachProduct)=> eachProduct.productID != product_ID);
  }

  editProduct(bookID: number){
    // later we will fill in the code
  }


  constructor() { }

  ngOnInit(): void {
  }

}
