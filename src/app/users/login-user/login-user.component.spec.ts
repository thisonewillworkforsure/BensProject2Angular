import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserComponent } from './login-user.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('LoginUserComponent', () => {
  let component: LoginUserComponent;
  let fixture: ComponentFixture<LoginUserComponent>;
  let httpMock : HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserComponent ],
      imports: [HttpClientTestingModule],
      providers:[HttpTestingController]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Have LOGIN displayed', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain("LOGIN");
  });

  it("should Have a button that says 'Forgot Password?'", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.d-grid .btn')?.textContent).toContain("Forgot Password");
  });
});
