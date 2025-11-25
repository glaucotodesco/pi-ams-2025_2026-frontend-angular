import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesPage } from './courses';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';

describe('CoursesPage', () => {
  let component: CoursesPage;
  let fixture: ComponentFixture<CoursesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesPage],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});