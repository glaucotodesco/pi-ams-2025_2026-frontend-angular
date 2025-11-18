import { Component, OnInit } from '@angular/core';
import { MenuService, MenuItem } from '../../menu-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: false
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] = []; // lista de itens do menu vinda do menuService
  isCollapsed = true;  
  openDropdowns: { [key: number]: boolean } = {};

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuItems$.subscribe(items => this.menuItems = items);
    // inscreve-se no observable do menuService e atualiza o menuItems com os novos itens sempre que ter uma mudança.
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    // altera o estado da navbar
  }

  toggleDropdown(index: number) {
    this.openDropdowns[index] = !this.openDropdowns[index];
    // altera o estado do dropdown
  }

  isDropdownOpen(index: number): boolean {
    return !!this.openDropdowns[index];
    // retorna o estado do dropdown
  }
}
