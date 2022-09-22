import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../profiles.model';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editProfile : ProfileModel = {
    profileID: 0,
    userID: 0,
    iconImg: "",
    firstName: "",
    lastName: "",
    description: ""
  }

  constructor(private profileService : ProfileService,
    private activatedRoute : ActivatedRoute,
    private route : Router) { }

  ngOnInit(): void {
    let id : any = this.activatedRoute.snapshot.paramMap.get("pid");
    this.profileService.getProfile(id).subscribe((Response)=>{
      this.editProfile = Response;
    })
  }

  updateProfile(): void{
    this.profileService.updateProfile(this.editProfile).subscribe((Response)=>{
      this.editProfile = Response;
      this.route.navigate([`get-profile/${this.editProfile.userID}`]);
    });
  }
}
