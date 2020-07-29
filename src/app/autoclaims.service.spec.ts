import { TestBed } from '@angular/core/testing';

import { AutoclaimsService } from './autoclaims.service';

describe('AutoclaimsService', () => {
  let service: AutoclaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoclaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
