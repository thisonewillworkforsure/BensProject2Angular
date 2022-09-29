import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetProfileComponent } from './get-profile.component';

describe('GetProfileComponent', () => {
  let component: GetProfileComponent;
  let fixture: ComponentFixture<GetProfileComponent>;
  let httpMock: HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProfileComponent,],
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

    fixture = TestBed.createComponent(GetProfileComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show Profile when hideProfile is called', ()=>{
    component.hideProfile();
    expect(component.showProfile).toBe(false);
  });

  it('should not show Profile when displayProfile is called', ()=>{
    component.displayProfile();
    expect(component.showProfile).toBe(true);
  });
});
