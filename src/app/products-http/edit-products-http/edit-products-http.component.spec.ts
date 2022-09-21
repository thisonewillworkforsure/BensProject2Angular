import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductsHttpComponent } from './edit-products-http.component';

describe('EditProductsHttpComponent', () => {
  let component: EditProductsHttpComponent;
  let fixture: ComponentFixture<EditProductsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductsHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
