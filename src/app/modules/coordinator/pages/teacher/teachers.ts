import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teachers.html',
  styleUrls: ['./teachers.css'],
  standalone: false,
})
export class TeachersPage {
  columns: string[] = [
    'id',
    'Nome',
    'Tipo de usuário',
    'Telefone',
    'Email',
    'Componentes',
    '',
  ];
  teachers: Teacher[] = [
    { id: 1, name: 'Ana Silva', type: 'Presencial', phone: '(11) 98765-4321', components: 'Matemática, Estatística, Cálculo', email: 'ana.silva@example.com' },
    { id: 2, name: 'Bruno Souza', type: 'EAD', phone: '(21) 99876-5432', components: 'Algoritmos, Estruturas de Dados', email: 'bruno.souza@example.com' },
    { id: 3, name: 'Carla Pereira', type: 'Presencial', phone: '(31) 91234-5678', components: 'Banco de Dados, SQL, NoSQL', email: 'carla.pereira@example.com' },
    { id: 4, name: 'Diego Santos', type: 'Presencial', phone: '(41) 93456-7890', components: 'Redes, Segurança da Informação', email: 'diego.santos@example.com' },
    { id: 5, name: 'Eduarda Lima', type: 'EAD', phone: '(51) 94567-8901', components: 'Engenharia de Software, UML', email: 'eduarda.lima@example.com' },
    { id: 6, name: 'Felipe Rocha', type: 'Presencial', phone: '(61) 95678-9012', components: 'Programação Web, Angular, TypeScript', email: 'felipe.rocha@example.com' },
    { id: 7, name: 'Gabriel Costa', type: 'Presencial', phone: '(71) 96789-0123', components: 'Sistemas Operacionais, Linux', email: 'gabriel.costa@example.com' },
    { id: 8, name: 'Helena Martins', type: 'EAD', phone: '(81) 97890-1234', components: 'Inteligência Artificial, Machine Learning', email: 'helena.martins@example.com' },
    { id: 9, name: 'Igor Almeida', type: 'Presencial', phone: '(85) 98901-2345', components: 'Arquitetura de Computadores', email: 'igor.almeida@example.com' },
    { id: 10, name: 'Júlia Fernandes', type: 'Presencial', phone: '(92) 90012-3456', components: 'Design de Interação, UX', email: 'julia.fernandes@example.com' },
    { id: 11, name: 'Karen Ribeiro', type: 'EAD', phone: '(27) 91123-4567', components: 'Projeto Integrador, Metodologias Ágeis', email: 'karen.ribeiro@example.com' },
    { id: 12, name: 'Lucas Oliveira', type: 'Presencial', phone: '(62) 92234-5678', components: 'DevOps, CI/CD, Docker', email: 'lucas.oliveira@example.com' },
  ];
  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';

  showSearch = false; // controla visibilidade do input

  get filteredTeachers(): Teacher[] {
    const filtered = this.teachers.filter((t) =>
      t.name.toLowerCase().includes(this.searchTerm.toLowerCase())
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

  refreshTeachers() {
    this.collectionSize = this.teachers.length;
  }
}

export interface Teacher {
  id: number;
  name: string;
  type: string;
  phone: string;
  components: string;
  email: string;
}
