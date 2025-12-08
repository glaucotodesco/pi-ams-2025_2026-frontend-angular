import { TestBed } from '@angular/core/testing';

import { AcademicSemesterService } from './academic-semester-service';

describe('AcademicSemesterService', () => {
  let service: AcademicSemesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicSemesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
