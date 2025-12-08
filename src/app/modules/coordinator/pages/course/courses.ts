import { Component, OnInit } from '@angular/core';
import { CourseProps } from '../../../../interfaces/CourseProps';
import { CourseService } from '../../../../services/course/course-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalityProps } from '../../../../interfaces/ModalityProps';
import { ModalityService } from '../../../../services/modality/modality-service';
import { PeriodicityService } from '../../../../services/periodicity/periodicty-service';
import { PeriodicityProps } from '../../../../interfaces/PeriodicityProps';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
  standalone: false,
})
export class CoursesPage implements OnInit {
  columns: string[] = ['ID', 'Nome', 'Descrição','Periodicidade','Modalidade', ''];
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

  constructor(
    private courseService: CourseService,
    private modalityService: ModalityService,
    private periodicityService: PeriodicityService,
    private formBuilder: FormBuilder
  ) {
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
      modalityId: ['', [Validators.required]],
      periodicityId: ['', [Validators.required]],
    });
  }

  modalities: ModalityProps[] = [];
  periodicities: PeriodicityProps[] = [];

  ngOnInit(): void {
    this.loadCourses();
    this.loadModalities();
    this.loadPeriodicities();
  }

  loadModalities() {
    this.modalityService.getAll().subscribe({
      next: (data) => {
        this.modalities = data;
      },
    });
  }

  loadPeriodicities() {
    this.periodicityService.getAll().subscribe({
      next: (data) => {
        this.periodicities = data;
      },
    });
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
    this.formGroupCourse.patchValue({
      id: course.id,
      name: course.name,
      description: course.description,
      modalityId: course.modality?.id ?? '',
      periodicityId: course.periodicity?.id ?? '',
    })
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
