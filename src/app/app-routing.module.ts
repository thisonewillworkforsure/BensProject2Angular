import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsHttpComponent } from './products-http/list-products-http/list-products-http.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';
import { ListProductsComponent } from './products/list-products/list-products.component';

import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: "test",
    component: TestComponent
  },

  {
    path: "list-products",
    component: ListProductsComponent
  },

  {
    path: "edit-products",
    component: EditProductsComponent
  },

  {
    path: "edit-products/:pid",
    component: EditProductsComponent
  },

  {
    path: "list-products-http",
    component: ListProductsHttpComponent
  },

  {
    path: "edit-products-http",
    component: EditProductsComponent
  }
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
