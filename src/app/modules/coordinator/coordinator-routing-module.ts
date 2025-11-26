import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { MenuService } from '../shared/menu-service';
import { CoursesPage } from './pages/course/courses';
import { TeachersPage } from './pages/teacher/teachers';
import { SubjetcPage } from './pages/subject/subjetc';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage, // rota /admin/home renderiza o componente Home
  },
  {
    path: 'courses',
    component: CoursesPage
  },
  {
    path: 'teachers',
    component: TeachersPage,
  },
  {
    path: 'subjects',
    component: SubjetcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRoutingModule {
  constructor(private menuService: MenuService) {
    this.menuService.addMenu([
      { label: 'Início', path: '/coordinator/home', icon: 'bi bi-house' },
      { label: 'Cursos', path: '/coordinator/courses', icon: 'bi bi-book' },
      { label: 'Professores', path: '/coordinator/teachers', icon: 'bi bi-people' },
      { label: 'Disciplinas', path: '/coordinator/subjects', icon: 'bi bi-book' },
    ]);
  }
}
