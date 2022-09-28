import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from '../users.model';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global/global.service';
@Component({
  selector: 'register-guest',
  templateUrl: './register-guest.component.html',
  styleUrls: ['./register-guest.component.css']
})
export class RegisterGuestComponent implements OnInit {

  newGuest: UserModel = {
    userID: 0,
    typeID: 3,
    userName: "guest",
    userPassword: "guest",
    statusID: 1
  }

  constructor(private userService: UsersService,
    private router: Router,
    private globalService: GlobalService) { }



  ngOnInit(): void {
    this.userService.addUser(this.newGuest).subscribe((Response)=>{
      this.newGuest = Response;
      this.globalService.setCurrentUser(Response);
      this.router.navigate(["list-shopping-items",{userID: this.newGuest.userID}]);
    })
  }

}
