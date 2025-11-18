import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { SharedModule } from '../../../shared/shared-module';

interface Curso {
  id: number;
  nome: string;
}

interface Componente {
  id: number;
  nome: string;
}

interface CursoAtribuido {
  id: number;
  nome: string;
  componentes: Componente[];
}

@Component({
  selector: 'app-teacher-page',
  standalone: true,
  templateUrl: './teacher-page.html',
  styleUrls: ['./teacher-page.css'],
  imports: [
    FormsModule,  
    SharedModule // <-- aqui o modal genérico é liberado
  ]
})
export class TeachersPage {

  // =============================
  // LISTA DA TABELA (DADOS REAIS)
  // =============================
  teachers = [
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

  columns = [
    'id',
    'Nome',
    'Tipo de usuário',
    'Telefone',
    'Email',
    'Componentes',
    ''
  ];

  page = 1;
  pageSize = 8;
  searchTerm = '';
  showSearch = false;

  get filteredTeachers() {
    return this.teachers
      .filter(t => t.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) this.searchTerm = '';
  }

  // =============================
  // FORMULÁRIO DO MODAL
  // =============================

  nome = '';
  matricula = '';
  email = '';
  telefone = '';
  tipoUsuario = '';

  tiposUsuario = [
    { nome: 'Professor' },
    { nome: 'Coordenador' },
  ];

  cursos: Curso[] = [
    { id: 1, nome: 'Análise e Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Banco de Dados' },
  ];

  componentes: Componente[] = [
    { id: 1, nome: 'Estrutura de Dados' },
    { id: 2, nome: 'Engenharia de Software' },
    { id: 3, nome: 'Modelagem de BD' }
  ];

  cursoSelecionado: Curso | null = null;
  componenteSelecionado: Componente | null = null;

  atribuicoes: CursoAtribuido[] = [];

  addCurso() {
    if (!this.cursoSelecionado) return;

    const existe = this.atribuicoes.find(c => c.id === this.cursoSelecionado!.id);
    if (!existe) {
      this.atribuicoes.push({
        id: this.cursoSelecionado.id,
        nome: this.cursoSelecionado.nome,
        componentes: []
      });
    }
  }

  addComponente() {
    if (!this.cursoSelecionado || !this.componenteSelecionado) return;

    const curso = this.atribuicoes.find(c => c.id === this.cursoSelecionado!.id);
    if (!curso) return;

    const existe = curso.componentes.find(c => c.id === this.componenteSelecionado!.id);
    if (!existe) curso.componentes.push(this.componenteSelecionado);
  }

  removeComponente(cursoId: number, compId: number) {
    const curso = this.atribuicoes.find(c => c.id === cursoId);
    if (!curso) return;

    curso.componentes = curso.componentes.filter(c => c.id !== compId);
  }

  removeCurso(cursoId: number) {
    this.atribuicoes = this.atribuicoes.filter(c => c.id !== cursoId);
  }

  // =============================
  // SALVAR PROFESSOR
  // =============================
  onAddTeacher() {
    const componentesString = this.atribuicoes
      .flatMap(c => c.componentes.map(cc => cc.nome))
      .join(', ');

    this.teachers.push({
      id: this.teachers.length + 1,
      name: this.nome,
      type: this.tipoUsuario,
      phone: this.telefone,
      email: this.email,
      components: componentesString
    });

    this.resetForm();
  }

  onCancelAdd() {
    this.resetForm();
  }

  resetForm() {
    this.nome = '';
    this.matricula = '';
    this.email = '';
    this.telefone = '';
    this.tipoUsuario = '';

    this.cursoSelecionado = null;
    this.componenteSelecionado = null;
    this.atribuicoes = [];
  }
}
