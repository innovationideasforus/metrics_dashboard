import { TestBed } from '@angular/core/testing';

import { AutogiosService } from './autogios.service';

describe('AutogiosService', () => {
  let service: AutogiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutogiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
