import { TestBed } from '@angular/core/testing';

import { ModalityService } from './modality-service';

describe('ModalityService', () => {
  let service: ModalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
