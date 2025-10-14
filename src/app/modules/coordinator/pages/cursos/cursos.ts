import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css'],
  standalone: false,
})

export class Cursos {
  columns: string[] = ["id","Nome", "Modalidade", "Eixo Tecnologico", "Num Componentes", ""];
  @Input() cursos: Curso[] = [
   { id: 1, 
        nome: 'Analise em Desenvolvimento de Sistemas', 
        modalidade: 'Presencial', 
        eixotecnologico: 'informação e comunicação', 
        numerocomponentes: 28
       },

      {  id: 2, 
        nome: 'gestão Empresarial', 
        modalidade: 'Presencial', 
        eixotecnologico: 'Gestão e Negócios', 
        numerocomponentes: 30
      },

      {  id: 3, 
        nome: 'matematica', 
        modalidade: 'Presencial', 
        eixotecnologico: 'Matemática e suas Tecnologias', 
        numerocomponentes: 25
      },

      {  id: 4, 
        nome: 'Gestão de Eventos', 
        modalidade: 'hibrido', 
        eixotecnologico: 'informação e comunicação', 
        numerocomponentes: 35 
      },
  ];
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