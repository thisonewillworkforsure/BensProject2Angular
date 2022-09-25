import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { GlobalService } from 'src/app/global/global.service';
@Component({
  selector: 'logout-user',
  templateUrl: './logout-user.component.html',
  styleUrls: ['./logout-user.component.css']
})
export class LogoutUserComponent implements OnInit {

  constructor(private authService : AuthService,
    private router : Router,
    private globalService : GlobalService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn = false;
    this.globalService.setIsShopping(false);
    this.router.navigate(["login-user"]);
  }

}
