import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileComponent } from './edit-profile.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;
  let httpMock : HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileComponent ],
      imports: [HttpClientTestingModule,FormsModule],
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

    fixture = TestBed.createComponent(EditProfileComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have first name displayed', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".form-group label")?.innerHTML).toContain("First Name");
  });

  it('should have an id initally of 0', () => {
    expect(component.editProfile.profileID).toEqual(0);
  });
});
