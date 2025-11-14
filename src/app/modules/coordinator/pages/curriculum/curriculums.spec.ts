import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { Curriculums } from './curriculums';
import { CurriculumService } from '../../../../services/curriculum.service';

describe('Curriculums', () => {
  let component: Curriculums;
  let fixture: ComponentFixture<Curriculums>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Curriculums],
      imports: [FormsModule, NgbModule, SharedModule],
      providers: [
        CurriculumService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curriculums);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load curriculums on init', () => {
    const mockCurriculums = [
      { id: 1, name: 'Test 1', abbreviation: 'T1', courseId: 1, technologyArea: 'IT', theoretical: 100, practical: 200, quantityClass: 300, modality: 'Presencial' },
      { id: 2, name: 'Test 2', abbreviation: 'T2', courseId: 1, technologyArea: 'IT', theoretical: 150, practical: 150, quantityClass: 300, modality: 'Híbrido' }
    ];

    fixture.detectChanges(); // triggers ngOnInit

    const req = httpMock.expectOne('http://localhost:8080/curriculums');
    expect(req.request.method).toBe('GET');
    req.flush(mockCurriculums);

    expect(component.curriculums.length).toBe(2);
  });

  it('should toggle search visibility', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne('http://localhost:8080/curriculums');
    req.flush([]);

    expect(component.showSearch).toBeFalse();
    component.toggleSearch();
    expect(component.showSearch).toBeTrue();
    component.toggleSearch();
    expect(component.showSearch).toBeFalse();
  });

  it('should filter curriculums by search term', () => {
    component.curriculums = [
      { id: 1, name: 'Desenvolvimento de Sistemas', acronym: 'DS', teacher: 'Prof. João', technologicalArea: 'IT', practicalClasses: 200, theoreticalClasses: 100, modality: 'Presencial', totalWorkload: 300 },
      { id: 2, name: 'Redes de Computadores', acronym: 'RC', teacher: 'Prof. Maria', technologicalArea: 'IT', practicalClasses: 150, theoreticalClasses: 150, modality: 'Híbrido', totalWorkload: 300 }
    ];
    component.searchTerm = 'Desenvolvimento';
    const filtered = component.filteredCurriculums;
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toContain('Desenvolvimento');
  });

  it('should calculate total workload automatically', () => {
    component.newCurriculum = {
      name: 'Teste Auto Calc',
      acronym: 'TAC',
      teacher: 'Prof. Teste',
      technologicalArea: 'Informação e Comunicação',
      practicalClasses: 200,
      theoreticalClasses: 100,
      modality: 'Presencial',
      totalWorkload: 0
    };

    component.calculateTotalWorkload();

    expect(component.newCurriculum.totalWorkload).toBe(300);
  });

  it('should reset form when canceling add', () => {
    component.newCurriculum.name = 'Teste';
    component.newCurriculum.acronym = 'T';
    component.onCancelAdd();

    expect(component.newCurriculum.name).toBe('');
    expect(component.newCurriculum.acronym).toBe('');
  });
});
