import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { GlobalService } from '../global/global.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService,
    private globalService : GlobalService) { }

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
}
