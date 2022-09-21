import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsHttpComponent } from './list-products-http.component';

describe('ListProductsHttpComponent', () => {
  let component: ListProductsHttpComponent;
  let fixture: ComponentFixture<ListProductsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
