import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeachersPage } from './teachers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';

describe('TeachersPage', () => {
  let component: TeachersPage;
  let fixture: ComponentFixture<TeachersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachersPage],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});