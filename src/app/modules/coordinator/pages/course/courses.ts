import { Component, OnInit } from '@angular/core';
import { CourseProps } from '../../../../interfaces/CourseProps';
import { CourseService } from '../../../../services/course/course-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
  standalone: false,
})
export class CoursesPage implements OnInit {
  columns: string[] = ['ID', 'Nome', 'Descrição', ''];
  deleteCourse: CourseProps = {} as CourseProps;
  course: CourseProps = {} as CourseProps;

  courses: CourseProps[] = [];
  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';
  showSearch = false;

  formGroupCourse: FormGroup;
  isEditing: boolean = false;

  constructor(private courseService: CourseService, formBuilder: FormBuilder) {
    this.formGroupCourse = formBuilder.group({
      id: [''],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      description: ['', [Validators.minLength(5), Validators.maxLength(255)]],
    });
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAll().subscribe({
      next: (data) => {
        this.courses = data;
        this.collectionSize = data.length;
      },
      error: () => console.error('Error loading courses'),
    });
  }
  ngOnChanges(): void {
    if (this.course.id) {
      this.formGroupCourse.setValue(this.course);
    }
  }
  edit(course: CourseProps) {
    this.isEditing = true;
    this.course = course;
    this.formGroupCourse.setValue(this.course);
  }

  save() {
    if (this.formGroupCourse.invalid) return;

    const course: CourseProps = this.formGroupCourse.value;
    console.log(course);
    
    if (this.isEditing) {
      this.courseService.update(course).subscribe({
        complete: () => {
          this.loadCourses();
          this.reset();
        },
      });
    } else {
      this.courseService.create(course).subscribe({
        next: (data) => {
          this.courses.push(data);
          this.reset();
        },
        error: () => console.error('Erro ao salvar curso'),
      });
    }
  }

  reset() {
    this.formGroupCourse.reset();
    this.isEditing = false;
    this.course = {} as CourseProps;
  }

  delete(course: CourseProps) {
    if (!confirm(`Certeza que deseja remover o curso ${course.name}`)) return;

    this.deleteCourse = course;
    this.courseService.delete(course).subscribe({
      next: () => {
        this.courses = this.courses.filter((c) => c !== course);
      },
      error: () => alert(`Erro ao remover o curso ${course.name}`),
    });
  }

  get filteredCourses(): CourseProps[] {
    const filtered = this.courses.filter((c) =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
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
