import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductsHttpComponent } from './products-http/edit-products-http/edit-products-http.component';
import { ListProductsHttpComponent } from './products-http/list-products-http/list-products-http.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
import { GetProfileComponent } from './profiles/get-profile/get-profile.component';
import { CreatePurchaseComponent } from './purchases/create-purchase/create-purchase.component';
import { GetPurchaseHistoryComponent } from './purchases/get-purchase-history/get-purchase-history.component';
import { ListShoppingItemsComponent } from './shopping/list-shopping-items/list-shopping-items.component';

import { TestComponent } from './test/test.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { LoginGuard } from './users/login.guard';
import { LogoutUserComponent } from './users/logout-user/logout-user.component';
import { RegisterGuestComponent } from './users/register-guest/register-guest.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

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
    component: ListProductsHttpComponent,
    canActivate: [LoginGuard]
  },

  {
    path: "edit-products-http",
    component: EditProductsHttpComponent
  },

  {
    path: "edit-products-http/:pid",
    component: EditProductsHttpComponent
  },
 
  {
    path: "list-users",
    component: ListUsersComponent
  },

  {
    path: "login-user",
    component: LoginUserComponent
  },

  {
    path: "logout-user",
    component: LogoutUserComponent
  },

  {
    path: "get-profile/:pid",
    component: GetProfileComponent
  },

  {
    path: "edit-profile/:pid",
    component: EditProfileComponent
  },

  {
    path: "list-shopping-items",
    component: ListShoppingItemsComponent
  },

  {
    path: "get-purchase-history/:pid",
    component: GetPurchaseHistoryComponent
  },

  {
    path: "create-purchase",
    component: CreatePurchaseComponent
  },

  {
    path: "welcome",
    component: WelcomeComponent
  },

  {
    path: "register-user",
    component: RegisterUserComponent
  },

  {
    path: "register-guest",
    component: RegisterGuestComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
