import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  standalone: false,
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.css'
})
export class Curriculum {
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'nome', label: 'Nome' },
    { key: 'professor', label: 'Professor' },
    { key: 'aulasPraticas', label: 'Aulas Práticas' },
    { key: 'aulasTeoricas', label: 'Aulas Teóricas' },
    { key: 'modalidade', label: 'Modalidade' },
    { key: 'curso', label: 'Curso' }
  ];

  columnLabels = [
    'ID',
    'Nome',
    'Professor',
    'Aulas Práticas',
    'Aulas Teóricas',
    'Modalidade',
    'Curso',
    ''
  ];

  professoresFiltrados = [
    { id: 1, nome: 'João Silva', professor: 'João Silva', aulasPraticas: 10, aulasTeoricas: 20, modalidade: 'Presencial', curso: 'Analise em Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Maria Souza', professor: 'Maria Souza', aulasPraticas: 15, aulasTeoricas: 15, modalidade: 'Híbrido', curso: 'Gestão Empresarial' },
    { id: 3, nome: 'Carlos Lima', professor: 'Carlos Lima', aulasPraticas: 8, aulasTeoricas: 22, modalidade: 'Presencial', curso: 'Matemática' },
    { id: 4, nome: 'Ana Paula', professor: 'Ana Paula', aulasPraticas: 12, aulasTeoricas: 18, modalidade: 'Presencial', curso: 'Gestão de Eventos' }
  ];

  pageSize = 10;
  page = 1;

  refreshProfessores() {
  }
}
