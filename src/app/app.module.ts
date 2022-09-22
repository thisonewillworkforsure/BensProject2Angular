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
import { EditProductsHttpComponent } from './products-http/edit-products-http/edit-products-http.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { LogoutUserComponent } from './users/logout-user/logout-user.component';
import { GetProfileComponent } from './profiles/get-profile/get-profile.component';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    ListProductsComponent,
    EditProductsComponent,
    ListProductsHttpComponent,
    EditProductsHttpComponent,
    ListUsersComponent,
    LoginUserComponent,
    LogoutUserComponent,
    GetProfileComponent,
    EditProfileComponent,

    

   
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
