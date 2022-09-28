import { Component, OnInit } from '@angular/core';
import { UserModel } from '../users.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

 
  newUser: UserModel = {
    userID: 0,
    typeID: 0,
    userName: "",
    userPassword: "",
    statusID: 1
  }

  allUsers: UserModel[] = [];

  isNameUnique : boolean = true;

  private buttonStatus : number = 0;

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
        Validators.required, Validators.minLength(2),
      ])),
      password: new FormControl('', Validators.required),
      conpassword: new FormControl('', Validators.required)
    },
      {
        validators: [this.mustMatch('password', 'conpassword'),this.uniqueUserName('username')]
      })

      this.f['password'].setValue("password");
      this.f['conpassword'].setValue("password");
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

      if(usernamecontrol.value == 'guest'){
        usernamecontrol.setErrors({uniqueUserName:true});
        return;
      }

      let found : boolean = false;
      for(let eachUser of this.allUsers){
        if(eachUser.userName == usernamecontrol.value){
          found = true;
          usernamecontrol.setErrors(null);
          break;
        }
      }
      if(!found){
        usernamecontrol.setErrors({uniqueUserName:true});
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

  handleButtonClick() :void{
    switch(this.buttonStatus){

      case 0: 
      this.buttonStatus = 1;
      break;
      case 1:
      this.buttonStatus = 2;
      break;
      case 2:
      this.updateUser();
      break;
    }
  }

  get status(){
    return this.buttonStatus;
  }

  adjustConfirmPassword():void{
    this.f['conpassword'].setValue(this.f['password'].value);
  }

  updateUser():void{
    let userName = this.f['username'].value;
    let newPassword = this.f['password'].value;
    this.userService.getAllUsers().subscribe((Response)=>{
      console.log(Response);
      this.allUsers = Response;
      let found : boolean = false;
      for(let eachUser of this.allUsers){
        if(userName == eachUser.userName){
            this.newUser = eachUser;
            found = true;
            break;
        }
      }
      if(!found) return;
      this.newUser.userPassword = newPassword;
      this.userService.updateUser(this.newUser).subscribe((Response)=>{
        console.log(Response.userPassword);
      })
    })
  }
}
