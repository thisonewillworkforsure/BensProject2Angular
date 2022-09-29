import { TestBed } from '@angular/core/testing';

import { GlobalService } from './global.service';

describe('GlobalService', () => {
  let service: GlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have isShopping initially false ', () => {
    expect(service.isShopping).toBe(false);
  });

  it('should have isCheckingOut initially false ', () => {
    expect(service.isCheckingOut).toBe(false);
  });
});
