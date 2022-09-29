import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterGuestComponent } from './register-guest.component';

describe('RegisterGuestComponent', () => {
  let component: RegisterGuestComponent;
  let fixture: ComponentFixture<RegisterGuestComponent>;
  let httpMock: HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGuestComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterGuestComponent);
    httpMock = TestBed.get(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have register-guest works as its html', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("p")?.innerText).toContain("register-guest works!");
  });

  it('should have type ID as 3 as default', () => {
    expect(component.newGuest.typeID).toEqual(3);
  });
});
