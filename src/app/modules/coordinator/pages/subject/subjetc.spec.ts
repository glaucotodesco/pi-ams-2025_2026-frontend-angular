import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { SubjetcPage } from './subjetc';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubjectService } from '../../../../services/subject/subject-service';


describe('SubjetcPage', () => {
  let component: SubjetcPage;
  let fixture: ComponentFixture<SubjetcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjetcPage],
      imports: [
        FormsModule,
        NgbModule,
        SharedModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [SubjectService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjetcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle search visibility', () => {
    expect(component.showSearch).toBeFalse();
    component.toggleSearch();
    expect(component.showSearch).toBeTrue();
    component.toggleSearch();
    expect(component.showSearch).toBeFalse();
  });
  
  it('should filter curriculums by search term', () => {
    component.searchTerm = 'Desenvolvimento';
    const filtered = component.filteredSubjects;
  });


  it('should add new curriculum', () => {
  });

  it('should reset form after adding curriculum', () => {
  });

  it('should reset form when canceling add', () => {
  });

  it('should calculate total workload automatically', () => {
  });
});