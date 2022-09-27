import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/users/users.model';
import { ProfileModel } from '../profiles.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {

    showProfile : boolean = false;


    profile : ProfileModel = {
      profileID: 0,
      userID: 0,
      iconImg: "",
      firstName: "",
      lastName: "",
      description: ""
    }

    userModel: UserModel = {
      userID: 0,
      typeID: 0,
      userName: "",
      userPassword: "",
      statusID: 0
    }


  constructor(private router : Router,
   private activatedRoute : ActivatedRoute,
   private profileService: ProfileService) { }

  ngOnInit(): void {
    this.hideProfile();
    this.loadProfile();
  }

  loadProfile(): void {
    let id : any = this.activatedRoute.snapshot.paramMap.get("pid");
    let type : any = this.activatedRoute.snapshot.paramMap.get("typeID");
    let uName : any = this.activatedRoute.snapshot.paramMap.get("userName");
    let pWord : any = this.activatedRoute.snapshot.paramMap.get("passWord");
    let sID : any = this.activatedRoute.snapshot.paramMap.get("statusID");

    this.userModel={
      userID: id,
      typeID: type,
      userName: uName,
      userPassword: pWord,
      statusID: sID
    }

    this.profileService.getProfile(id).subscribe((Response)=>{
      console.log(this.userModel);
      this.profile = Response;
    })
  }

  editProfile(id:number): void{
    this.router.navigate(["edit-profile",id]);
  }

  startShoppingPlease(): void{
    this.router.navigate(["list-shopping-items", {userID : this.profile.userID}]);
  }

  seePurchaseHistory(): void{
    this.router.navigate([`get-purchase-history/${this.profile.userID}`]);
  }

  displayProfile(): void{
    this.showProfile = true;
  }

  hideProfile(): void{
    this.showProfile = false;
  }

  isProfileNameEmpty() : boolean{
    return this.profile.firstName == "";
  }

  isCustomer(): boolean{
    return this.userModel.typeID == 2;
  }

  logOut(): void{
    this.router.navigate(['logout-user']);
  }
}
