import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { GlobalService } from '../global/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService,
    private globalService : GlobalService,
    private router : Router) { }

  ngOnInit(): void {
   
  }

  retrieverIsUserLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

  getLengthOfCart() : number{
    return this.globalService.getCartLength();
  }

  isShopping(): boolean{
    return this.globalService.isCustomerShopping();
  }

  toggleCheckOut() : void{
    this.globalService.toggleIsCheckingOut();
  }

  welcome() : void{
    this.router.navigate(["welcome"]);
  }
}
