import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have isloggedIn initially as false', () => {
    expect(service.isLoggedIn).toBe(false);
  });

  it('should have isLoggedIn change when setIsLoggedIn Called', () => {
    service.setIsLoggedIn(true);
    expect(service.isLoggedIn).toBe(true);
  });
});
