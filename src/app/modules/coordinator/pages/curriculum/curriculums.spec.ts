import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curriculuns } from './curriculums';

describe('Curriculuns', () => {
  let component: Curriculuns;
  let fixture: ComponentFixture<Curriculuns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Curriculuns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curriculuns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
