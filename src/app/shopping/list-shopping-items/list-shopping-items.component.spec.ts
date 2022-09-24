import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShoppingItemsComponent } from './list-shopping-items.component';

describe('ListShoppingItemsComponent', () => {
  let component: ListShoppingItemsComponent;
  let fixture: ComponentFixture<ListShoppingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShoppingItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
