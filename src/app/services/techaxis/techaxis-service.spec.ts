import { TestBed } from '@angular/core/testing';

import { TechaxisService } from './techaxis-service';

describe('TechaxisService', () => {
  let service: TechaxisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechaxisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
