import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from './course';

describe('Course', () => {
  let component: Course;
  let fixture: ComponentFixture<Course>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Course]
    }).compileComponents();

    fixture = TestBed.createComponent(Course);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
