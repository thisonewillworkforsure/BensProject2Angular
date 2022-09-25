import { Injectable } from '@angular/core';
import { PurchaseModel } from './purchases.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  baseUrl : string = "http://localhost:8080/api/purchases";

  constructor(private httpClient : HttpClient) { }


  getPurchaseHistoryForUser(userId : number) : Observable<PurchaseModel[]>{
    return this.httpClient.get<PurchaseModel[]>(this.baseUrl + "/" + userId);
  }

  createPurchase(purchaseModel : PurchaseModel) : Observable<PurchaseModel>{
    return this.httpClient.post<PurchaseModel>(this.baseUrl,purchaseModel);
  }

}
