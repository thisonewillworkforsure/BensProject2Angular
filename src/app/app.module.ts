import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { FormsModule } from '@angular/forms';
import { EditProductsComponent } from './products/edit-products/edit-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsHttpComponent } from './products-http/list-products-http/list-products-http.component';
import { EditProductsHttpComponent } from './products/edit-products-http/edit-products-http.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    ListProductsComponent,
    EditProductsComponent,
    ListProductsHttpComponent,
    EditProductsHttpComponent,

    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
