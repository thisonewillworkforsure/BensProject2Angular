import { Component, OnInit } from '@angular/core';
import { UserModel } from '../users.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { UniqueUserName } from './username.validator';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  newUser: UserModel = {
    userID: 0,
    typeID: 0,
    userName: "",
    userPassword: "",
    statusID: 1
  }

  allUsers: UserModel[] = [this.newUser];

  isNameUnique : boolean = true;


  reactiveForm: FormGroup = new FormGroup({});
  passwordCheck: string = "";

  constructor(private userService: UsersService,
    private router: Router,
    private FB: FormBuilder) {
      this.initializeFormGroup(FB);

  }

  initializeFormGroup(FB: FormBuilder):void{
    this.reactiveForm = FB.group({
      username: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(6),
      ])),
      password: new FormControl('', Validators.required),
      conpassword: new FormControl('', Validators.required)
    },
      {
        validators: [this.mustMatch('password', 'conpassword'),this.uniqueUserName('username')]
      })
  }


  get f() {
    return this.reactiveForm.controls;
  }

  mustMatch(password: any, conpassword: any) {

    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const conpasswordcontrol = formGroup.controls[conpassword];

      if (conpasswordcontrol.errors && !conpasswordcontrol.errors['mustMatch']) {
        return; //this is if it has an error not from must match
      }

      if (passwordcontrol.value !== conpasswordcontrol.value) {
        conpasswordcontrol.setErrors({ mustMatch: true });
      }
      else {
        conpasswordcontrol.setErrors(null);
      }
    };
  }

  uniqueUserName(username:any){
    return (formGroup: FormGroup) => {
      const usernamecontrol = formGroup.controls[username];

      if(usernamecontrol.errors && !usernamecontrol.errors['uniqueUserName']){
        return;
      }

      let found : boolean = false;
      for(let eachUser of this.allUsers){
        if(eachUser.userName == usernamecontrol.value){
          found = true;
          usernamecontrol.setErrors({ uniqueUserName:true});
          break;
        }
      }
      if(!found){
        usernamecontrol.setErrors(null);
      }
    }
  }


  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((Response)=>{
      this.allUsers = Response;
    });
  }

  createUser(): void {

    /*this.checkForUniqueUserName();
    if(!this.isNameUnique)
    return;*/

    this.newUser.userName = this.f['username'].value;
    this.newUser.userPassword = this.f['password'].value;
    if (this.newUser.userName != "") {
      this.newUser.statusID = 1;
      this.newUser.typeID = 2;
      this.userService.addUser(this.newUser).subscribe((Response) => {
        this.router.navigate(["login-user"]);
      })
    }
  }

  checkForUniqueUserName(){
    let found : boolean = false;
    for(let eachUser of this.allUsers){
      if(eachUser.userName == this.f['username'].value){
        found = true;
        this.isNameUnique = false;
        break;
      }
    }
   if(!found){this.isNameUnique = true;}

  }

}
