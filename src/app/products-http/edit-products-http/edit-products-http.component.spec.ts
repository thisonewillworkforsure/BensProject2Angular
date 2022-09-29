import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductsHttpComponent } from './edit-products-http.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

fdescribe('EditProductsHttpComponent', () => {
  let component: EditProductsHttpComponent;
  let fixture: ComponentFixture<EditProductsHttpComponent>;
  let httpMock : HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductsHttpComponent,],
      imports: [HttpClientTestingModule, FormsModule],
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

    fixture = TestBed.createComponent(EditProductsHttpComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an initial product ID of 0', ()=>{
    expect(component.updProduct.productID).toEqual(0);
  });

  it('should have Update Product as the title', ()=>{
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".card-title")?.innerHTML).toContain("Update Product");
  });
});
