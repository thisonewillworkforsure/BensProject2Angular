import { TestBed } from '@angular/core/testing';

import { ShoppingService } from './shoppingCart.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartModel } from './cart.model';
describe('ShoppingService', () => {
  let service: ShoppingService;
  let httpMock: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ShoppingService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should access get all shopping items for one for one', ()=> {
    let cart : CartModel[] = [];
    service.getAllCartItemsForUser(3).subscribe((Response)=>{
      cart = Response;
    });
    const req = httpMock.expectOne(service.baseUrl + "/3");
    expect(req.request.method).toEqual("GET");
    //spyOn(service,"getProfile").and.returnValue(of());
  });

  it('should access create new shopping item', ()=> {
    let newItem : CartModel = {
      shoppingID: 1,
      userID: 1,
      productID: 1,
      quantity: 1,
      shoppingStatusID: 1
    };
    service.createCartItem(newItem).subscribe((Response)=>{
      
    });
    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toEqual("POST");
    
  });
});
