import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../../services/subject/subject-service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectProps } from '../../../../interfaces/SubjectProps';

@Component({
  selector: 'app-subjetc',
  standalone: false,
  templateUrl: './subjetc.html',
  styleUrl: './subject.css',
})
export class SubjetcPage implements OnInit {
  columns: string[] = [
    'id',
    'Nome',
    'Sigla',
    'Aulas Práticas',
    'Número do Semestre',
    '',
  ];

  formGroupSubject: FormGroup;
  isEditing: boolean = false;

  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';
  showSearch = false;

  subjects: SubjectProps[] = [];
  subject: SubjectProps = {} as SubjectProps;
  deleteSubject: SubjectProps = {} as SubjectProps;

  constructor(
    private subjectService: SubjectService,
    formBuilder: FormBuilder
  ) {
    this.formGroupSubject = formBuilder.group({
      id: [''],
      name: [''],
      acronym: [''],
      practicalLessonsCount: [''],
      semesterNumber: [''],
    });
  }

  ngOnInit(): void {
    this.loadSubjects();
  }

  private loadSubjects() {
    this.subjectService.getAll().subscribe({
      next: (data) => {
        this.subjects = data;
        this.collectionSize = data.length;
      },
      error: () => console.error('Error loading subjects'),
    });
  }

  edit(subject: SubjectProps) {
    this.isEditing = true;
    this.subject = subject;
    this.formGroupSubject.setValue(this.subject);
  }

  save() {
    if (!this.formGroupSubject.valid) return;
    const subject: SubjectProps = this.formGroupSubject.value;
    if (this.isEditing) {
      this.subjectService.update(subject).subscribe({
        complete: () => {
          this.loadSubjects();
          this.reset();
        },
      });
    } else {
      this.subjectService.create(subject).subscribe({
        next: (data) => {
          this.subjects.push(data);
          this.reset();
        },
      });
    }
  }

  reset() {
    this.formGroupSubject.reset();
    this.isEditing = false;
    this.subject = {} as SubjectProps;
  }

  delete(subject: SubjectProps) {
     if (!confirm(`Certeza que deseja remover o disciplina ${subject.name}`)) return;

    this.deleteSubject = subject;
    this.subjectService.delete(subject).subscribe({
      next: () => {
        this.subjects = this.subjects.filter((s) => s !== subject);
      },
      error: () => alert(`Erro ao remover a disciplina ${subject.name}`),
    });
  }

  teachers = [
    'Prof. João Silva',
    'Prof. Maria Santos',
    'Prof. Carlos Oliveira',
    'Prof. Ana Costa',
    'Prof. Pedro Almeida',
  ];

  technologicalAreas = [
    'Informação e Comunicação',
    'Controle e Processos Industriais',
    'Produção Alimentícia',
    'Gestão e Negócios',
    'Recursos Naturais',
  ];

  modalities = ['Presencial', 'Híbrido', 'Online', 'EAD'];

  itensSemester: string[] = [
    'Analise e Desenvolvimento de Sistemas',
    'Redes de Computadores',
    'Automação Industrial',
  ];
  itensCourse: string[] = [
    '1º Semestre',
    '2º Semestre',
    '3º Semestre',
    '4º Semestre',
  ];

  get filteredSubjects(): SubjectProps[] {
    const filtered = this.subjects.filter((s) =>
      s.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.collectionSize = filtered.length;
    return filtered.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchTerm = '';
    }
  }

  refreshCurriculums() {
    this.collectionSize = this.subjects.length;
  }
}
