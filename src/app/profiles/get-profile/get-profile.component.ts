import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/users/users.model';
import { ProfileModel } from '../profiles.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { GlobalService } from 'src/app/global/global.service';
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

  constructor(private router : Router,
   private activatedRoute : ActivatedRoute,
   private profileService: ProfileService,
   private globalService : GlobalService) { }

  ngOnInit(): void {
    this.hideProfile();
    this.loadProfile();
  }

  loadProfile(): void {
    let id : any = this.activatedRoute.snapshot.paramMap.get("pid");
  
    this.profileService.getProfile(id).subscribe((Response)=>{
      console.log("AT PROFILE");
      console.log(this.globalService.currentUser.userName);

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
    return this.globalService.isCustomer();
  }

  logOut(): void{
    this.router.navigate(['logout-user']);
  }
}
