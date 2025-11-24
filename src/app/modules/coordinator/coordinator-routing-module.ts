import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MenuService } from '../shared/menu-service';
import { Course } from './pages/course/course';
import { TeachersPage } from './pages/teacher/teacher-page';
import { SubjetcPage } from './pages/subject/subjetc';



const routes: Routes = [
  {
    path: '',
    component: Home, // rota /admin/home renderiza o componente Home
  },
  {
    path: 'courses',
    component: Course
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
      { label: 'Disciplinas', path: '/coordinator/subjects' },
    ]);
  }
}
