import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { MenuService } from '../shared/menu-service';
import { CoursesPage } from './pages/course/courses';
import { TeachersPage } from './pages/teacher/teachers';
import { SubjetcPage } from './pages/subject/subjetc';
import { ClassroomPage } from './pages/classroom/classroom';

const routes: Routes = [
  {
    path: '',
    component: HomePage, // rota /admin/home renderiza o componente Home
  },
  {
    path: 'courses',
    component: CoursesPage,
  },
  {
    path: 'teachers',
    component: TeachersPage,
  },
  {
    path: 'subjects',
    component: SubjetcPage,
  },
  {
    path: 'classrooms',
    component: ClassroomPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRoutingModule {
  constructor(private menuService: MenuService) {
    this.menuService.addMenu([
      { label: 'Início', path: '/coordinator/' },
      { label: 'Salas', path: '/coordinator/classrooms' },
      { label: 'Cursos', path: '/coordinator/courses' },
      { label: 'Professores', path: '/coordinator/teachers' },
      { label: 'Disciplinas', path: '/coordinator/subjects' },
    ]);
  }
}
0;
