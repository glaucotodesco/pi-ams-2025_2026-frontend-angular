import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MenuService } from '../shared/menu-service';
import { Cursos } from './pages/cursos/cursos';

const routes: Routes = [
  {
    path: '',
    component: Home, // rota /admin/home renderiza o componente Home
  },
  {
    path: 'courses',
    component: Cursos
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
    ]);
  }
}
