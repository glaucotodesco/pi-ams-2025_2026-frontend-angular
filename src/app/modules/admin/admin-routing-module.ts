import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { MenuService } from '../shared/menu-service';

const routes: Routes = [
  {
    path: '',
    component: HomePage, // rota /admin/home renderiza o componente Home
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
  // injeta o MenuService e adiciona os itens de menu
  // assim que o módulo Admin é carregado (com lazy loading, afins de performance)
  constructor(private menuService: MenuService) {
    this.menuService.addMenu([
      { label: 'Início', path: '/admin/home' },
      { label: 'Usuários', children: [
        { label: 'Listar', path: '/admin/users/list' },
        { label: 'Criar', path: '/admin/users/create' }
      ]}
    ]);
  } // ajuste de acordo com as rotas do módulo
}

