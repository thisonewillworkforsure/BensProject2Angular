import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UserModel } from '../users/users.model';
import { ProfileModel } from './profiles.model';
describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give a Profile Model', ()=> {
    let names : ProfileModel[] = [];
    service.getAllProfile().subscribe((Response)=>{
      names = Response;
    });
    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toEqual("GET");
    //spyOn(service,"getProfile").and.returnValue(of());
  });

  it('should give a Profile Model', ()=> {
    let name : ProfileModel = {
      profileID: 7,
      userID: 7,
      iconImg: "string",
      firstName: "",
      lastName: "",
      description: ""

    };
    service.getProfile(7).subscribe((Response)=>{
      name = Response;
    });
    const req = httpMock.expectOne(service.baseUrl+"/"+name.profileID);
    expect(req.request.method).toEqual("GET");
    
  });
});
