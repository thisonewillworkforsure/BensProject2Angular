import { Component, OnInit } from '@angular/core';
import { UserModel } from '../users.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
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


  reactiveForm: FormGroup = new FormGroup({});
  passwordCheck: string = "";

  constructor(private userService: UsersService,
    private router: Router,
    private FB: FormBuilder) {
    this.reactiveForm = FB.group({
      username: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])),
      password: new FormControl('', Validators.required),
      conpassword: new FormControl('', Validators.required)
    },
      {
        validators: this.mustMatch('password', 'conpassword')
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


  ngOnInit(): void {
  }

  createUser(): void {
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


}
