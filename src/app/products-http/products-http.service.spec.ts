import { TestBed } from '@angular/core/testing';
import { ProductModel } from '../products/products.model';
import { ProductsHttpService } from './products-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ProductsHttpService', () => {
  let service: ProductsHttpService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsHttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should access getAllProducts', ()=> {
    let names : ProductModel[] = [];
    service.getAllProducts().subscribe((Response)=>{
      names = Response;
    });
    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toEqual("GET");
    //spyOn(service,"getProfile").and.returnValue(of());
  });

  it('should access getOneProduct', ()=> {
    let name : ProductModel = {
      productID : 7,
      productName: "",
      productDesc: "",
      productImg: "",
      productCost: 7

    };
    service.getOneProduct(7).subscribe((Response)=>{
      name = Response;
    });
    const req = httpMock.expectOne(service.baseUrl+"/"+name.productID);
    expect(req.request.method).toEqual("GET");
    
  });
});
