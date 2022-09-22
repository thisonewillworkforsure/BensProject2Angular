import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';
import { UserModel } from '../users.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  errorMessage: string = "";

  user: UserModel = {
    userID: 0,
    typeID: 0,
    userName: "",
    userPassword: "",
    statusID: 0
  }


  constructor(private userService : UsersService,
    private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(userName : string,userPassword : string){
    this.userService.getOneUser(userName,userPassword)
    .subscribe((Response)=>{
      console.log(Response.userName + " " + userPassword);
    });
  }
}
