import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLevelPage } from './access-level';

describe('AccessLevelPage', () => {
  let component: AccessLevelPage;
  let fixture: ComponentFixture<AccessLevelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessLevelPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
