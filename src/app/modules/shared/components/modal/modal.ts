import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

interface Curso {
  id: number;
  nome: string;
}

interface Componente {
  id: number;
  nome: string;
  cursoId: number;
}

interface CursoAtribuido {
  id: number;
  nome: string;
  componentes: Componente[];
}

interface DadosProfessor {
  nome: string;
  matricula: string;
  email: string;
  telefone: string;
  tipoUsuario: string;
  atribuicoes: CursoAtribuido[];
}

@Component({
  selector: 'app-modal-generic',
  standalone: false,
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
})
export class ModalComponent {

  // Inputs já existentes
  @Input() title: string = 'Cadastrar Uusario';
  @Input() actionText: string = 'Confirmar';
  @Input() actionText2: string = 'Cancelar';
  @Input() actionFunction: (dados: DadosProfessor) => void = () => { };

  @Output() confirmed = new EventEmitter<DadosProfessor>();
  @Output() cancelled = new EventEmitter<void>();

  @ViewChild('content', { static: true }) content!: TemplateRef<any>;

  private modalRef: NgbModalRef | null = null;
  private camposObrigatorios = ['nome', 'matricula', 'email', 'tipoUsuario'];
  erroValidacao: string = '';

  constructor(public modalService: NgbModal) { }

  open() {
    this.resetFormulario();
    this.erroValidacao = '';
    this.modalRef = this.modalService.open(this.content, { centered: true, size: 'xl' });
  }

  onAction() {
    console.log('[Modal] onAction — valores antes de validar:', {
      nome: this.nome,
      matricula: this.matricula,
      email: this.email,
      tipoUsuario: this.tipoUsuario,
      cursoSelecionado: this.cursoSelecionado,
      componenteSelecionado: this.componenteSelecionado,
      atribuicoes: this.atribuicoes
    });

    if (this.validarFormulario()) {
      const dados = this.obterDados();
      this.actionFunction(dados);
      this.confirmed.emit(dados);
      this.modalService.dismissAll();
    }
  }

  onCancel() {
    this.cancelled.emit();
    this.resetFormulario();
    this.modalService.dismissAll();
  }

  // =====================================================
  // VALIDAÇÃO E RETORNO DE DADOS
  // =====================================================

  private validarFormulario(): boolean {
    // Converter para string se undefined e remover espaços
    const nome = String(this.nome || '').trim();
    const matricula = String(this.matricula || '').trim();
    const email = String(this.email || '').trim();
    const tipoUsuario = String(this.tipoUsuario || '').trim();

    // Debug: log dos valores que chegam à validação
    console.log('[Modal] validarFormulario — inspecionar valores:', { nome, matricula, email, tipoUsuario });

    // Validar campos obrigatórios
    if (!nome || nome.length === 0) {
      this.erroValidacao = 'Nome completo é obrigatório.';
      return false;
    }

    if (!matricula || matricula.length === 0) {
      this.erroValidacao = 'Matrícula é obrigatória.';
      return false;
    }

    if (!email || email.length === 0 || !this.isEmailValido(email)) {
      this.erroValidacao = 'E-mail válido é obrigatório.';
      return false;
    }

    if (!tipoUsuario || tipoUsuario.length === 0) {
      this.erroValidacao = 'Tipo de usuário é obrigatório.';
      return false;
    }

    this.erroValidacao = '';
    return true;
  }

  private isEmailValido(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  private obterDados(): DadosProfessor {
    return {
      nome: String(this.nome || '').trim(),
      matricula: String(this.matricula || '').trim(),
      email: String(this.email || '').trim(),
      telefone: String(this.telefone || '').trim(),
      tipoUsuario: String(this.tipoUsuario || '').trim(),
      atribuicoes: JSON.parse(JSON.stringify(this.atribuicoes))
    };
  }

  private resetFormulario(): void {
    this.nome = '';
    this.matricula = '';
    this.email = '';
    this.telefone = '';
    this.tipoUsuario = '';
    this.cursoSelecionado = null;
    this.componenteSelecionado = null;
    this.atribuicoes = [];
    this.erroValidacao = '';
  }

  // =====================================================
  // CAMPOS DO FORMULÁRIO (Cadastro de Professor)
  // =====================================================

  nome = '';
  matricula = '';
  email = '';
  telefone = '';
  tipoUsuario: string = '';

  tiposUsuario = [
    { id: 1, nome: 'Professor' },
    { id: 2, nome: 'Coordenador' },
    { id: 3, nome: 'Diretor'   },
    { id: 4, nome: 'Aluno'}
  ];

  cursos: Curso[] = [
    { id: 1, nome: 'Análise e Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Banco de Dados' },
  ];

  componentes: Componente[] = [
    { id: 1, nome: 'Estrutura de Dados', cursoId: 1 },
    { id: 2, nome: 'Programação Web', cursoId: 1 },
    { id: 3, nome: 'Modelagem de BD', cursoId: 2 },
  ];

  cursoSelecionado: any = null;
  componenteSelecionado: any = null;

  atribuicoes: CursoAtribuido[] = [];

  // =====================================================
  // LÓGICA DE CURSO E COMPONENTES
  // =====================================================

  addCurso() {
    if (!this.cursoSelecionado) return;

    const exists = this.atribuicoes.some(c => c.id === this.cursoSelecionado.id);

    if (!exists) {
      this.atribuicoes.push({
        id: this.cursoSelecionado.id,
        nome: this.cursoSelecionado.nome,
        componentes: []
      });
    }
  }

  addComponente() {
    if (!this.cursoSelecionado || !this.componenteSelecionado) return;

    let curso = this.atribuicoes.find(c => c.id === this.cursoSelecionado.id);

    if (!curso) {
      curso = {
        id: this.cursoSelecionado.id,
        nome: this.cursoSelecionado.nome,
        componentes: []
      };
      this.atribuicoes.push(curso);
    }

    const exists = curso.componentes.some(c => c.id === this.componenteSelecionado.id);
    if (!exists) {
      curso.componentes.push(this.componenteSelecionado);
    }
  }

  removeComponente(cursoId: number, compId: number) {
    const curso = this.atribuicoes.find(c => c.id === cursoId);
    if (!curso) return;

    curso.componentes = curso.componentes.filter(c => c.id !== compId);

    if (curso.componentes.length === 0) {
      this.removeCurso(cursoId);
    }
  }

  removeCurso(cursoId: number) {
    this.atribuicoes = this.atribuicoes.filter(c => c.id !== cursoId);
  }
}
