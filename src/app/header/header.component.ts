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
   document.body.style.backgroundColor = "black";
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

  isCheckingOut() : boolean{
    return this.globalService.isCheckingOut;
  }

  isCustomerOrAdmin(): boolean{
    return this.globalService.isCustomer() || this.globalService.isAdmin();
  }

  getGoToProfileString(): string{
    return "get-profile" + "/" + this.globalService.getUserID();

  }

  goToProfile() : void{
    this.router.navigate([`get-profile/${this.globalService.getUserID()}`]);
  }

  welcome() : void{
    this.router.navigate(["welcome"]);
  }
}
