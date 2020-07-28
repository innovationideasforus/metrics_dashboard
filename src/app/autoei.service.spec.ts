import { TestBed } from '@angular/core/testing';

import { AutoeiService } from './autoei.service';

describe('AutoeiService', () => {
  let service: AutoeiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoeiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
