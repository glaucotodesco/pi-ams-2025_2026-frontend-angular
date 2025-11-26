import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MenuItem {
  label: string;
  path?: string;
  icon?: string;
  children?: MenuItem[];
}

@Injectable({ providedIn: 'root' })
// serviço que gerencia os itens do menu que aparecem no NavbarComponent
export class MenuService {
  private _menuItems: MenuItem[] = [];
  // array privado que guarda todos os menus adicionados até agora
  private menuSubject = new BehaviorSubject<MenuItem[]>([]);
  // BehaviorSubject armazena e exibe a lista de menus atual

  addMenu(items: MenuItem[]) {
    this._menuItems = [...this._menuItems, ...items];
    this.menuSubject.next(this._menuItems);
    // adiciona os menus ao array privado e atualiza o componente
  }

  get menuItems$() {
    return this.menuSubject.asObservable();
    // observable para o componente Navbar se inscrever e renderizar os itens dinamicamente
  }
}
