import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculums',
  standalone: false,
  templateUrl: './curriculums.html',
  styleUrl: './curriculums.css',
})
export class Curriculums {
  columns: string[] = [
    'id',
    'Nome',
    'Professor',
    'Eixo Tecnologico',
    'Aulas Práticas',
    'Aulas Teóricas',
    'Modalidade',
    '',
  ];
  curriculums: Curriculum[] = [
    {
      id: 1,
      name: 'Desenvolvimento de Sistemas',
      teacher: 'Prof. João Silva',
      technologicalAxis: 'Informação e Comunicação',
      practicalClasses: 400,
      theoreticalClasses: 200,
      modality: 'Presencial'
    },
    {
      id: 2,
      name: 'Redes de Computadores',
      teacher: 'Prof. Maria Santos',
      technologicalAxis: 'Informação e Comunicação',
      practicalClasses: 350,
      theoreticalClasses: 250,
      modality: 'Híbrido'
    },
    {
      id: 3,
      name: 'Automação Industrial',
      teacher: 'Prof. Carlos Oliveira',
      technologicalAxis: 'Controle e Processos Industriais',
      practicalClasses: 450,
      theoreticalClasses: 150,
      modality: 'Presencial'
    }
  ];
  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';

  showSearch = false; // controla visibilidade do input
  
  itensSemester: string[] = ['Analise e Desenvolvimento de Sistemas', 'Redes de Computadores', 'Automação Industrial'];
  itensCourse: string[] = ['1º Semestre', '2º Semestre', '3º Semestre', '4º Semestre'];

  get filteredCurriculums(): Curriculum[] {
    const filtered = this.curriculums.filter((c) =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
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

  refreshCurriculums() {
    this.collectionSize = this.curriculums.length;
  }
}

export interface Curriculum {
  id: number;
  name: string;
  teacher: string;
  technologicalAxis: string;
  practicalClasses: number;
  theoreticalClasses: number;
  modality: string;
}
