import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css'],
  standalone: false,
})

export class Cursos {
  columns: string[] = ["Foto", "Nome", "Tipo de usuário", "Telefone", "Email", "Componentes"];
  @Input() cursos: Curso[] = [];
  @Input() page = 1;
  @Input() pageSize = 8;
  @Input() collectionSize = 0;
  @Input() searchTerm = '';

  showSearch = false; // controla visibilidade do input

  get cursosFiltrados(): Curso[] {
    const filtered = this.cursos.filter(c =>
      c.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.collectionSize = filtered.length;
    return filtered.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchTerm = '';
    }
  }

  refreshCursos() {
    this.collectionSize = this.cursos.length;
  }

}

export interface Curso {
  id: number;
  nome: string;
  modalidade: string;
  eixotecnologico: string;
  numerocomponentes: number;
}

