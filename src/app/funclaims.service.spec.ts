import { TestBed } from '@angular/core/testing';

import { FunclaimsService } from './funclaims.service';

describe('FunclaimsService', () => {
  let service: FunclaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunclaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
