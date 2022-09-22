import { Injectable } from '@angular/core';
import { ProfileModel } from './profiles.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl: string = "http://localhost:8080/api/profiles";

  constructor(private httpClient : HttpClient) { }

  getAllProfile() : Observable<ProfileModel[]>{
    return this.httpClient.get<ProfileModel[]>(this.baseUrl);
  }

  createProfile(profile : ProfileModel) : Observable<ProfileModel>{
    return this.httpClient.post<ProfileModel>(this.baseUrl,profile);
  }

  updateProfile(profile : ProfileModel) : Observable<ProfileModel>{
    return this.httpClient.put<ProfileModel>(this.baseUrl,profile);
  }

  getProfile(userID: number) : Observable<ProfileModel>{
    return this.httpClient.get<ProfileModel>(this.baseUrl + "/" + userID);
  }

  deleteProfile(userID: number) : Observable<ProfileModel>{
    return this.httpClient.delete<ProfileModel>(this.baseUrl + "/" + userID);
  }
}
