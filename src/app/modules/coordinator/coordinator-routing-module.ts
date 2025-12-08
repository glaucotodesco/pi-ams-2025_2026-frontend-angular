import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { MenuService } from '../shared/menu-service';
import { CoursesPage } from './pages/course/courses';
import { UsersPage } from './pages/user/users';
import { SubjetcPage } from './pages/subject/subjetc';
import { ClassroomPage } from './pages/classroom/classroom';
import { AccessLevelPage } from './pages/access-level/access-level';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage, // rota /admin/home renderiza o componente Home
  },
  {
    path: 'courses',
    component: CoursesPage,
  },
  {
    path: 'teachers',
    component: UsersPage,
  },
  {
    path: 'subjects',
    component: SubjetcPage,
  },
  {
    path: 'classrooms',
    component: ClassroomPage,
  },
  {
    path: 'access-levels',
    component: AccessLevelPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRoutingModule {
  constructor(private menuService: MenuService) {
    this.menuService.addMenu([
      { label: 'Início', path: '/coordinator/', icon: 'bi bi-house' },
      { label: 'Salas', path: '/coordinator/classrooms', icon: 'bi bi-building' },
      { label: 'Cursos', path: '/coordinator/courses', icon: 'bi bi-book' },
      { label: 'Usuários', path: '/coordinator/teachers', icon: 'bi bi-people' },
      { label: 'Disciplinas', path: '/coordinator/subjects', icon: 'bi bi-book' },
      { label: 'Acesso', path: '/coordinator/access-levels', icon: 'bi bi-shield-check' },
    ]);
  }
}
0;
