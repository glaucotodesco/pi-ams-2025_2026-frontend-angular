import { Component } from '@angular/core';
import { TeacherService } from '../../../../services/user/user-service';
import { CourseService } from '../../../../services/course/course-service';
import { SubjectService } from '../../../../services/subject/subject-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  welcomeMessage = 'Seja bem vindo novamente!';
  cards = [
    {
      title: 'Total de professores',
      value: 0,
      icon: 'bi bi-people',
    },
    {
      title: 'Total de disciplinas',
      value: 0,
      icon: 'bi bi-book',
    },
    {
      title: 'Total de cursos',
      value: 0,
      icon: 'bi bi-book',
    },
  ];

  constructor(
    private teacherService: TeacherService,
    private subjectService: SubjectService,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.loadTotalTeachers();
    this.loadTotalSubjects();
    this.loadTotalCourses();
  }

  loadTotalTeachers() {
    this.teacherService.getAll().subscribe({
      next: (data) => {
        this.cards[0].value = data.length;
      },
      error: () => console.error('Erro ao carregar total de teachers'),
    });
  }

  loadTotalSubjects() {
    this.subjectService.getAll().subscribe({
      next: (data) => {
        this.cards[1].value = data.length;
      },
      error: () => console.error('Erro ao carregar total de teachers'),
    });
  }

  loadTotalCourses() {
    this.courseService.getAll().subscribe({
      next: (data) => {
        this.cards[2].value = data.length;
      },
      error: () => console.error('Erro ao carregar total de teachers'),
    });
  }
}
