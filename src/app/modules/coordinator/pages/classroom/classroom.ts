import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassroomProps } from '../../../../interfaces/ClassroomProps';
import { ClassroomService } from '../../../../services/classroom/classroom-service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.html',
  styleUrls: ['./classroom.css'],
  standalone: false,
})
export class ClassroomPage implements OnInit {
  columns: string[] = [
    'ID',
    'Nome',
    'Localização',
    'Recursos Físicos',
    'Recursos de Software',
    'Capacidade',
    '',
  ];

  classrooms: ClassroomProps[] = [];
  classroom: ClassroomProps = {} as ClassroomProps;
  deleteClassroom: ClassroomProps = {} as ClassroomProps;

  // Paginação e busca
  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';
  showSearch = false;

  // Formulário
  formGroupClassroom: FormGroup;
  isEditing = false;

  constructor(
    private classroomService: ClassroomService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupClassroom = this.formBuilder.group({
      id: [''],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      location: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      physicalResources: ['', [Validators.maxLength(500)]],
      softwareResources: ['', [Validators.maxLength(500)]],
      capacity: [
        '',
        [Validators.required, Validators.min(1), Validators.max(999)],
      ],
      practical: [false],
    });
  }
  ngOnInit(): void {
    this.loadClassrooms();
  }

  loadClassrooms(): void {
    this.classroomService.getAll().subscribe({
      next: (data) => {
        this.classrooms = data;
        this.collectionSize = data.length;
      },
      error: () => console.error('Error loading classrooms'),
    });
  }

  edit(classroom: ClassroomProps): void {
    this.isEditing = true;
    this.classroom = classroom;
    this.formGroupClassroom.patchValue({
      ...classroom,
      practical: classroom.practical ?? false,
    });
  }

  save(): void {
    if (this.formGroupClassroom.invalid) return;

    const classroom: ClassroomProps = this.formGroupClassroom.value;
    if (this.isEditing) {
      this.classroomService.update(classroom).subscribe({
        complete: () => {
          this.loadClassrooms();
          this.reset();
        },
      });
    } else {
      this.classroomService.create(classroom).subscribe({
        next: (data) => {
          this.classrooms.push(data);
          this.reset();
        },
        error: () => console.error('Erro ao salvar sala'),
      });
    }
  }

  delete(classroom: ClassroomProps): void {
    if (!confirm(`Certeza que deseja remover o curso ${classroom.name}`))
      return;


    this.classroomService.delete(classroom).subscribe({
      next: () => {
        this.classrooms = this.classrooms.filter((c) => c.id !== classroom.id);
        this.collectionSize = this.classrooms.length;
      },
      error: (error) => {
        alert(`Erro ao remover a sala "${classroom.name}". Tente novamente.`);
      },
    });
  }

  reset(): void {
    this.formGroupClassroom.reset();
    this.isEditing = false;
    this.classroom = {} as ClassroomProps;
  }

  get filteredClassrooms(): ClassroomProps[] {
    const filtered = this.filterClassrooms();
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return filtered.slice(startIndex, endIndex);
  }

  private filterClassrooms(): ClassroomProps[] {
    if (!this.searchTerm.trim()) {
      this.collectionSize = this.classrooms.length;
      return this.classrooms;
    }

    const searchLower = this.searchTerm.toLowerCase().trim();
    const filtered = this.classrooms.filter(
      (classroom) =>
        classroom.name?.toLowerCase().includes(searchLower) ||
        classroom.location?.toLowerCase().includes(searchLower) ||
        classroom.physicalResources?.toLowerCase().includes(searchLower) ||
        classroom.softwareResources?.toLowerCase().includes(searchLower)
    );

    this.collectionSize = filtered.length;
    return filtered;
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchTerm = '';
      this.page = 1;
    }
  }
}
