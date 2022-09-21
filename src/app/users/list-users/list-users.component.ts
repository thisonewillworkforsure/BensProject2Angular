import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../users.model';
import { UsersService } from '../users.service';
@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  allUsers : UserModel[] = [];

  constructor(private userService : UsersService,
    router : Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void{
    this.userService.getAllUsers().subscribe((Response)=>{
      this.allUsers = Response;
    });
  }
}
