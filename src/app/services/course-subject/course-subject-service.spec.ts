import { TestBed } from '@angular/core/testing';

import { CourseSubjectService } from './course-subject-service';

describe('CourseSubjectService', () => {
  let service: CourseSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
