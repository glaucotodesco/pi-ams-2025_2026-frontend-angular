import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { MenuService } from '../shared/menu-service';
import { CoursesPage } from './pages/course/courses';
import { TeachersPage } from './pages/teacher/teachers';
import { CurriculumsPage } from './pages/curriculum/curriculums';


const routes: Routes = [
  {
    path: '',
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
    path: 'curriculum',
    component: CurriculumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRoutingModule {
  constructor(private menuService: MenuService) {
    this.menuService.addMenu([
      { label: 'Início', path: '/coordinator/' },
      {
        label: 'Usuários',
        children: [
          { label: 'Lista', path: '/coordinator/users/list' },
          { label: 'Criar', path: '/coordinator/users/create' },
        ],
      },
      { label: 'Cursos', path: '/coordinator/courses' },
      { label: 'Professores', path: '/coordinator/teachers' },
      { label: 'Componente Curricular', path: '/coordinator/curriculum' },
    ]);
  }
}
