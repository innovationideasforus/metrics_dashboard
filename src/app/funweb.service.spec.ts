import { TestBed } from '@angular/core/testing';

import { FunwebService } from './funweb.service';

describe('FunwebService', () => {
  let service: FunwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
