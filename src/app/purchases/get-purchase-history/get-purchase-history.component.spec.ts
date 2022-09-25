import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPurchaseHistoryComponent } from './get-purchase-history.component';

describe('GetPurchaseHistoryComponent', () => {
  let component: GetPurchaseHistoryComponent;
  let fixture: ComponentFixture<GetPurchaseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPurchaseHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
