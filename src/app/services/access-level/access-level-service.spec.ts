import { TestBed } from '@angular/core/testing';
import { AccessLevelService } from './access-level-service';


describe('AccessLevelService', () => {
  let service: AccessLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
