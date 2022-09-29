import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListShoppingItemsComponent } from './list-shopping-items.component';
import { ActivatedRoute } from '@angular/router';

describe('ListShoppingItemsComponent', () => {
  let component: ListShoppingItemsComponent;
  let fixture: ComponentFixture<ListShoppingItemsComponent>;
  let httpMock: HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShoppingItemsComponent,],
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

    fixture = TestBed.createComponent(ListShoppingItemsComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have a container class", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("div")?.classList).toContain("container");
  });

  it("should have margin 5 for up top", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("div")?.classList).toContain("mt-5");
  });
});
