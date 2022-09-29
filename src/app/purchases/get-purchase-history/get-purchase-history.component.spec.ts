import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPurchaseHistoryComponent } from './get-purchase-history.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
describe('GetPurchaseHistoryComponent', () => {
  let component: GetPurchaseHistoryComponent;
  let fixture: ComponentFixture<GetPurchaseHistoryComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPurchaseHistoryComponent ],
      imports: [HttpClientTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
            snapshot: {
                paramMap: {
                    get(): number {
                        return 1;
                    },
                },
            },
        },
    },]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPurchaseHistoryComponent);
    httpMock = TestBed.get(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have UserID equal to the snapshop param', () => {
    expect(component.userId).toEqual(1);
  });

  it('should have Purchase History in the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.h1')?.textContent).toContain("Purchase History");
    
  });
});
