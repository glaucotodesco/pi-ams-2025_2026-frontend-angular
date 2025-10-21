import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuService } from '../shared/menu-service';
import { Home } from './pages/home/home';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {
  constructor(private menuService: MenuService) {
      this.menuService.addMenu([
        { label: 'Início', path: '/teacher/' },
        {
          label: 'Usuários',
          children: [
            { label: 'Lista', path: '/teacher/users/list' },
            { label: 'Criar', path: '/teacher/users/create' },
          ],
        },
      ]);
    }
 }
