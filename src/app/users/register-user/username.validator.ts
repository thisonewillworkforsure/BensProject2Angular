import { FormControl } from "@angular/forms";
import { UsersService } from "../users.service";
import { UserModel } from "../users.model";
export class UniqueUserName {

    constructor(private userService: UsersService) { }
    static uniqueUserName(fc: FormControl, allUsers: UserModel[]) {
        for (let eachUser of allUsers) {
            if (eachUser.userName == fc.value) {
                return ({ uniqueUserName: false });
            }
        }
        return ({ uniqueUserName: true });


        /*if(fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc"){
            return ({validUsername: true});
          } else {
            return (null);
          }*/
    }
}

//KEEPING THIS FOR THE SYNTAX THE EXAMPLE LATER LOOKED LIKE THIS:

/*
import { UsernameValidator } from '../../validators/username.validator';

this.validations_form = this.formBuilder.group({
  username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
    ])),
})


*/