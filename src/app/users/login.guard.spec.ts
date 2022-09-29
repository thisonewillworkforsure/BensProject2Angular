import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  let guard: LoginGuard;
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});
