import { Injectable } from '@angular/core';
import { UserModel } from './users.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../products/products.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:8080/api/users";

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this.baseUrl);
  }

  addUser(newUser : UserModel): Observable<UserModel>{
    return this.httpClient.post<UserModel>(this.baseUrl,newUser);
  }

  updateUser(updateUser: UserModel): Observable<UserModel>{
    return this.httpClient.put<UserModel>(this.baseUrl,updateUser);
  }

  deleteUser(id : number): Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl + "/" + id);
  }

  getOneUser(userUsername : string, userPassword: string) : Observable<UserModel>{
    let query_params = new HttpParams();
    query_params = query_params.append('userName',userUsername);
    query_params = query_params.append('passWord',userPassword);
    return this.httpClient.get<UserModel>(this.baseUrl + "/user", {params:query_params});
  }
}
