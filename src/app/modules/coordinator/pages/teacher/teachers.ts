import { Component, OnInit } from '@angular/core';
import { TeacherProps } from '../../../../interfaces/TeacherProps';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../../../services/teacher/teacher-service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teachers.html',
  styleUrls: ['./teachers.css'],
  standalone: false,
})
export class TeachersPage implements OnInit {
  teachers: TeacherProps[] = [];
  teacher: TeacherProps = {} as TeacherProps;
  deleteTeacher: TeacherProps = {} as TeacherProps;

  columns = ['id', 'Nome', 'Email', ''];

  formGroupTeacher: FormGroup;
  isEditing: boolean = false;

  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';
  showSearch = false;

  constructor(
    private teacherService: TeacherService,
    formBuilder: FormBuilder
  ) {
    this.formGroupTeacher = formBuilder.group({
      id: [''],
      name: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(100)]],
      email: ['',[Validators.email,Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers() {
    this.teacherService.getAll().subscribe({
      next: (data) => {
        this.teachers = data;
        this.collectionSize = data.length;
      },
      error: () => console.error('Error loading teachers'),
    });
  }

  edit(teacher: TeacherProps) {
    this.isEditing = true;
    this.teacher = teacher;
    this.formGroupTeacher.setValue(this.teacher);
  }

  save() {
    if (!this.formGroupTeacher.valid) return;
    const teacher: TeacherProps = this.formGroupTeacher.value;
    if (this.isEditing) {
      this.teacherService.update(teacher).subscribe({
        complete: () => {
          this.loadTeachers();
          this.reset();
        },
      });
    } else {
      this.teacherService.create(teacher).subscribe({
        next: (data) => {
          this.teachers.push(data);
          this.reset();
        },
      });
    }
  }

  reset() {
    this.formGroupTeacher.reset();
    this.isEditing = false;
    this.teacher = {} as TeacherProps;
  }

  delete(teacher: TeacherProps) {
    if (!confirm(`Certeza que deseja remover o professor ${teacher.name}`))
      return;

    this.deleteTeacher = teacher;
    this.teacherService.delete(teacher).subscribe({
      next: () => {
        this.teachers = this.teachers.filter((t) => t !== teacher);
      },
      error: () => alert(`Erro ao remover o professor ${teacher.name}`),
    });
  }

  get filteredTeachers() {
    const filtered = this.teachers.filter((s) =>
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
    if (!this.showSearch) this.searchTerm = '';
  }
}
