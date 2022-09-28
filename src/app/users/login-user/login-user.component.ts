import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';
import { UserModel } from '../users.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/global/global.service';
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
    private router: Router, private authService:AuthService,
    private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.getOneUser(this.user.userName,this.user.userPassword)
    .subscribe((Response)=>{
      if(Response){
        this.errorMessage = "";
        this.authService.isLoggedIn = true;
        this.globalService.setCurrentUser(Response);
        this.router.navigate([`get-profile/${Response.userID}`]);
      }
      else{
        this.errorMessage = "Invalid username/password";
      }
    });
  }

  goToResetPassword() :void{
    this.router.navigate(['reset-password']);
  }
}
