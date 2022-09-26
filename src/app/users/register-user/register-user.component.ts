import { Component, OnInit } from '@angular/core';
import { UserModel } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  newUser : UserModel = {
    userID: 0,
    typeID: 0,
    userName: "",
    userPassword: "",
    statusID: 1
  }

  passwordCheck : string = "";

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  createUser(): void{
      
  }

}
