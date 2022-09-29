import { TestBed } from '@angular/core/testing';

import { PurchasesService } from './purchases.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PurchaseModel } from './purchases.model';
describe('PurchasesService', () => {
  let service: PurchasesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PurchasesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should access get all purchases for one', ()=> {
    let purchases : PurchaseModel[] = [];
    service.getPurchaseHistoryForUser(3).subscribe((Response)=>{
      purchases = Response;
    });
    const req = httpMock.expectOne(service.baseUrl + "/3");
    expect(req.request.method).toEqual("GET");
    //spyOn(service,"getProfile").and.returnValue(of());
  });

  it('should access create purchase', ()=> {
    let newPurchase : PurchaseModel = {
    purchaseID : 1,
    userID: 1,
    totalCost: 1,
    purchaseDate: "",
    shoppingCartItemPojos: []
    };
    service.createPurchase(newPurchase).subscribe((Response)=>{
      
    });
    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toEqual("POST");
    
  });
});
