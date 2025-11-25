import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { SubjetcPage } from './subjetcPage';



describe('SubjetcPage', () => {
  let component: SubjetcPage;
  let fixture: ComponentFixture<SubjetcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjetcPage],
      imports: [FormsModule, NgbModule, SharedModule]
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
    const filtered = component.filteredCurriculums;
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toContain('Desenvolvimento');
  });

  it('should add new curriculum', () => {
    const initialCount = component.curriculums.length;
    component.newCurriculum = {
      name: 'Teste Curso',
      acronym: 'TC',
      teacher: 'Prof. Teste',
      technologicalArea: 'Informação e Comunicação',
      practicalClasses: 100,
      theoreticalClasses: 50,
      modality: 'Presencial',
      totalWorkload: 150
    };

    component.onAddCurriculum();

    expect(component.curriculums.length).toBe(initialCount + 1);
    const addedCurriculum = component.curriculums[component.curriculums.length - 1];
    expect(addedCurriculum.name).toBe('Teste Curso');
    expect(addedCurriculum.acronym).toBe('TC');
    expect(addedCurriculum.teacher).toBe('Prof. Teste');
    expect(addedCurriculum.totalWorkload).toBe(150);
  });

  it('should reset form after adding curriculum', () => {
    component.newCurriculum.name = 'Teste';
    component.newCurriculum.acronym = 'T';
    component.onAddCurriculum();

    expect(component.newCurriculum.name).toBe('');
    expect(component.newCurriculum.acronym).toBe('');
    expect(component.newCurriculum.teacher).toBe('');
    expect(component.newCurriculum.totalWorkload).toBe(0);
  });

  it('should reset form when canceling add', () => {
    component.newCurriculum.name = 'Teste';
    component.newCurriculum.acronym = 'T';
    component.onCancelAdd();

    expect(component.newCurriculum.name).toBe('');
    expect(component.newCurriculum.acronym).toBe('');
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
});
