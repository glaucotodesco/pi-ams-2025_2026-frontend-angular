import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuService } from '../shared/menu-service';
import { Home } from './pages/home/home';

const routes: Routes = [
  {
    path: '',
    component: Home, // rota /admin/home renderiza o componente Home
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {
  constructor(private menuService: MenuService) {
    this.menuService.addMenu([
      { label: 'Início', path: '/student/' },
      {
        label: 'Usuários',
        children: [
          { label: 'Lista', path: '/student/users/list' },
          { label: 'Criar', path: '/student/users/create' },
        ],
      },
    ]);
  }
}
