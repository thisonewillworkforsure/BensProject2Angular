import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';

import { LogoutUserComponent } from './logout-user.component';

describe('LogoutUserComponent', () => {
  let component: LogoutUserComponent;
  let fixture: ComponentFixture<LogoutUserComponent>;
  let service: AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutUserComponent ],
      providers: [AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutUserComponent);
    service = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have 'logout-user works' in its html!", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.innerText).toContain("logout-user works");
  });

  it("should have made auth service login false", () => {
    expect(service.isLoggedIn).toBe(false);
  });
});
