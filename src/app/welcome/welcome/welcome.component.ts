import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  shopAsGuest():void{
    this.router.navigate(["register-guest"])
  }

  login():void{
    this.router.navigate(["login-user"])

  }

  register():void{
    this.router.navigate(["register-user"])

  }

}
