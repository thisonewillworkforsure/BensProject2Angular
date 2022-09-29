import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserModel } from './users.model';
describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should access get all users', ()=> {
    let names : UserModel[] = [];
    service.getAllUsers().subscribe((Response)=>{
      names = Response;
    });
    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toEqual("GET");
    //spyOn(service,"getProfile").and.returnValue(of());
  });

  it('should access deleteUser', ()=> {
    let name : UserModel = {
      userID: 7,
      typeID: 1,
      userName: "",
      userPassword: "",
      statusID: 1

    };
    service.deleteUser(7).subscribe((Response)=>{
      
    });
    const req = httpMock.expectOne(service.baseUrl+"/"+name.userID);
    expect(req.request.method).toEqual("DELETE");
    
  });
});
