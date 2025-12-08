import { TestBed } from '@angular/core/testing';

import { CourseUserService } from './course-user-service';

describe('CourseUserService', () => {
  let service: CourseUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
