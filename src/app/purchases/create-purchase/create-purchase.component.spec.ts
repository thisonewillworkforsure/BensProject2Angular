import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global/global.service';

import { CreatePurchaseComponent } from './create-purchase.component';

describe('CreatePurchaseComponent', () => {
  let component: CreatePurchaseComponent;
  let fixture: ComponentFixture<CreatePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePurchaseComponent ],
      providers: [GlobalService,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have timeUntilPageChanges start off at 5000', () => {
    expect(component.f).toEqual(5000);
  });

  it('should lower timeUntilPageChanges by 1000 when calling lowerTimeByOneSecond()', () => {
    component.lowerTimeByOneSecond();
    expect(component.f).toEqual(4000);
  });
});
