import { TestBed } from '@angular/core/testing';

import { PeriodictyService } from './periodicty-service';

describe('PeriodictyService', () => {
  let service: PeriodictyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodictyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
