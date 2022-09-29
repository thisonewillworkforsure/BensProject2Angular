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
import { ListShoppingItemsComponent } from './shopping/list-shopping-items/list-shopping-items.component';
import { GetPurchaseHistoryComponent } from './purchases/get-purchase-history/get-purchase-history.component';
import { CreatePurchaseComponent } from './purchases/create-purchase/create-purchase.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators,FormControl,FormBuilder } from '@angular/forms';
import { RegisterGuestComponent } from './users/register-guest/register-guest.component';
import { FooterComponent } from './footer/footer.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { HttpClient } from '@angular/common/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
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
    ListShoppingItemsComponent,
    GetPurchaseHistoryComponent,
    CreatePurchaseComponent,
    WelcomeComponent,
    RegisterUserComponent,
    RegisterGuestComponent,
    FooterComponent,
    ResetPasswordComponent,
    

    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
