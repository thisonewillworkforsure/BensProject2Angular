import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsHttpComponent } from './list-products-http.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsHttpService } from '../products-http.service';
fdescribe('ListProductsHttpComponent', () => {
  let component: ListProductsHttpComponent;
  let fixture: ComponentFixture<ListProductsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsHttpComponent ],
      imports: [HttpClientTestingModule],
      providers: [ProductsHttpService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true on isCustomerOrGuest() if typeID is 2', ()=>{
    component.customerID = 2;
    expect(component.isCustomerOrGuest()).toBeTrue;

  });

  it('should return false on isCustomerOrGuest() if typeID is 1', ()=>{
    component.customerID = 1;
    expect(component.isCustomerOrGuest()).toBeFalse;

  });
});
