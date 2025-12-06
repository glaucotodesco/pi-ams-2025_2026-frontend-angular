import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../../services/subject/subject-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectProps } from '../../../../interfaces/SubjectProps';
import { TechAxisProps } from '../../../../interfaces/TechAxisProps';
import { ModalityProps } from '../../../../interfaces/ModalityProps';
import { ModalityService } from '../../../../services/modality/modality-service';
import { TechaxisService } from '../../../../services/techaxis/techaxis-service';

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
    'Modalidade',
    'Eixo Tecnológico',
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

  techAxis: TechAxisProps[] = [];
  modalities: ModalityProps[] = [];

  constructor(
    private subjectService: SubjectService,
    private techaxisService: TechaxisService,
    private modalityService: ModalityService,
    formBuilder: FormBuilder
  ) {
    this.formGroupSubject = formBuilder.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      acronym: ['', [Validators.required, Validators.maxLength(32)]],
      techAxisId: [null, Validators.required],
      modalityId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadSubjects();
    this.loadTechAxisAndModalities();
  }
  loadTechAxisAndModalities() {
    this.techaxisService.getAll().subscribe({
      next: (data) => {
        this.techAxis = data;
      },
      error: () => console.error('Error loading tech axis'),
    });
    this.modalityService.getAll().subscribe({
      next: (data) => {
        this.modalities = data;
      }});
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
    this.formGroupSubject.patchValue({
      id: subject.id,
      name: subject.name,
      acronym: subject.acronym,
      techAxisId: subject.techAxis?.id ?? null,
      modalityId: subject.modality?.id ?? null,
    });
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
