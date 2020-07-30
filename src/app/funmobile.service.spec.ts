import { TestBed } from '@angular/core/testing';

import { FunmobileService } from './funmobile.service';

describe('FunmobileService', () => {
  let service: FunmobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunmobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
