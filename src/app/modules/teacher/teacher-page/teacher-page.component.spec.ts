import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPageComponent } from './teacher-page.component';

describe('TeacherPage', () => {
  let component: TeacherPageComponent;
  let fixture: ComponentFixture<TeacherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
