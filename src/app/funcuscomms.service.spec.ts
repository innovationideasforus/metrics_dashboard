import { TestBed } from '@angular/core/testing';

import { FuncuscommsService } from './funcuscomms.service';

describe('FuncuscommsService', () => {
  let service: FuncuscommsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncuscommsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
