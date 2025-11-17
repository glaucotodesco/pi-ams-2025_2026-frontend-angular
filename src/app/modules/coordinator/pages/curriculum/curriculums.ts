import { Component, ViewChild, Injector, OnInit } from '@angular/core';
import { ModalComponent } from '../../../shared/components/modal/modal';
import { HttpClient } from '@angular/common/http';
import { CurriculumService } from '../../../../services/curriculum-service';

@Component({
  selector: 'app-curriculums',
  standalone: false,
  templateUrl: './curriculums.html',
  styleUrl: './curriculums.css',
})
export class Curriculums implements OnInit {
  @ViewChild('addModal') addModal!: ModalComponent;

  // Control modal state for create/edit reuse
  isEditing = false;
  private editingId: number | null = null;
  modalTitle = 'Adicionar Componente Curricular';
  actionText = 'Salvar';

  constructor(private injector: Injector) {}

  private get httpAvailable(): boolean {
    try {
      const http = this.injector.get(HttpClient, null as any);
      return !!http;
    } catch {
      return false;
    }
  }

  private get svc(): CurriculumService | null {
    if (!this.httpAvailable) return null;
    try {
      return this.injector.get(CurriculumService);
    } catch {
      return null;
    }
  }

  columns: string[] = [
    'id',
    'Nome',
    'Professor',
    'Área Tecnológica',
    'Aulas Práticas',
    'Aulas Teóricas',
    'Modalidade',
    '',
  ];
  curriculums: Curriculum[] = [
    {
      id: 1,
      name: 'Desenvolvimento de Sistemas',
      acronym: 'DS',
      teacher: 'Prof. João Silva',
      technologicalArea: 'Informação e Comunicação',
      practicalClasses: 400,
      theoreticalClasses: 200,
      modality: 'Presencial',
      totalWorkload: 600
    },
    {
      id: 2,
      name: 'Redes de Computadores',
      acronym: 'RC',
      teacher: 'Prof. Maria Santos',
      technologicalArea: 'Informação e Comunicação',
      practicalClasses: 350,
      theoreticalClasses: 250,
      modality: 'Híbrido',
      totalWorkload: 600
    },
    {
      id: 3,
      name: 'Automação Industrial',
      acronym: 'AI',
      teacher: 'Prof. Carlos Oliveira',
      technologicalArea: 'Controle e Processos Industriais',
      practicalClasses: 450,
      theoreticalClasses: 150,
      modality: 'Presencial',
      totalWorkload: 600
    }
  ];
  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';
  
  newCurriculum: Partial<Curriculum> = {
    name: '',
    acronym: '',
    teacher: '',
    technologicalArea: '',
    practicalClasses: 0,
    theoreticalClasses: 0,
    modality: '',
    totalWorkload: 0
  };

  teachers = [
    'Prof. João Silva',
    'Prof. Maria Santos', 
    'Prof. Carlos Oliveira',
    'Prof. Ana Costa',
    'Prof. Pedro Almeida'
  ];

  technologicalAreas = [
    'Informação e Comunicação',
    'Controle e Processos Industriais',
    'Produção Alimentícia',
    'Gestão e Negócios',
    'Recursos Naturais'
  ];

  modalities = [
    'Presencial',
    'Híbrido',
    'Online',
    'EAD'
  ];
  showSearch = false; // controla visibilidade do input
  
  itensSemester: string[] = ['Analise e Desenvolvimento de Sistemas', 'Redes de Computadores', 'Automação Industrial'];
  itensCourse: string[] = ['1º Semestre', '2º Semestre', '3º Semestre', '4º Semestre'];

  ngOnInit(): void {
    this.loadCurriculums();
  }

  private loadCurriculums() {
    const service = this.svc;
    if (service) {
      service.getAll().subscribe({
        next: (data) => {
          // Mantém fallback se API retornar vazio
          this.curriculums = (data && data.length) ? data : this.curriculums;
          this.refreshCurriculums();
        },
        error: () => {
          console.warn('Falha ao carregar dados da API. Usando dados locais.');
          this.refreshCurriculums();
        }
      });
    } else {
      this.refreshCurriculums();
    }
  }

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

  openAddModal() {
    this.isEditing = false;
    this.editingId = null;
    this.modalTitle = 'Adicionar Componente Curricular';
    this.actionText = 'Salvar';
    this.resetForm();
    this.addModal.open();
  }

  openEditModal(curriculum: Curriculum) {
    this.isEditing = true;
    this.editingId = curriculum.id;
    this.modalTitle = 'Editar Componente Curricular';
    this.actionText = 'Atualizar';
    this.newCurriculum = { ...curriculum };
    this.addModal.open();
  }

  onSave() {
    if (this.isEditing && this.editingId != null) {
      this.onUpdateCurriculum(this.editingId);
    } else {
      this.onAddCurriculum();
    }
  }

  onAddCurriculum() {
    const newId = this.curriculums.length ? Math.max(...this.curriculums.map(c => c.id)) + 1 : 1;
    const payload: Curriculum = {
      id: newId,
      name: this.newCurriculum.name || '',
      acronym: this.newCurriculum.acronym || '',
      teacher: this.newCurriculum.teacher || '',
      technologicalArea: this.newCurriculum.technologicalArea || '',
      practicalClasses: this.newCurriculum.practicalClasses || 0,
      theoreticalClasses: this.newCurriculum.theoreticalClasses || 0,
      modality: this.newCurriculum.modality || '',
      totalWorkload: this.newCurriculum.totalWorkload || 0
    };

    const service = this.svc;
    if (service) {
      service.create(payload).subscribe({
        next: (created) => {
          this.curriculums.push(created);
          this.addModal.modalService.dismissAll();
          this.resetForm();
          this.refreshCurriculums();
          alert('Componente curricular criado com sucesso!');
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao criar componente curricular.');
        }
      });
    } else {
      // Fallback local para ambiente de teste/storybook
      this.curriculums.push(payload);
      this.addModal.modalService.dismissAll();
      this.resetForm();
      this.refreshCurriculums();
      console.log('Currículo adicionado com sucesso!', payload);
    }
  }

  onUpdateCurriculum(id: number) {
    const updated: Curriculum = {
      id,
      name: this.newCurriculum.name || '',
      acronym: this.newCurriculum.acronym || '',
      teacher: this.newCurriculum.teacher || '',
      technologicalArea: this.newCurriculum.technologicalArea || '',
      practicalClasses: this.newCurriculum.practicalClasses || 0,
      theoreticalClasses: this.newCurriculum.theoreticalClasses || 0,
      modality: this.newCurriculum.modality || '',
      totalWorkload: this.newCurriculum.totalWorkload || 0
    };

    const service = this.svc;
    if (service) {
      service.update(id, updated).subscribe({
        next: (saved) => {
          const i = this.curriculums.findIndex(c => c.id === id);
          if (i >= 0) this.curriculums[i] = saved;
          this.addModal.modalService.dismissAll();
          this.resetForm();
          this.refreshCurriculums();
          alert('Componente curricular atualizado com sucesso!');
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao atualizar componente curricular.');
        }
      });
    } else {
      const i = this.curriculums.findIndex(c => c.id === id);
      if (i >= 0) this.curriculums[i] = updated;
      this.addModal.modalService.dismissAll();
      this.resetForm();
      this.refreshCurriculums();
      console.log('Currículo atualizado (local) com sucesso!', updated);
    }
  }

  onDeleteCurriculum(id: number) {
    if (!confirm('Deseja realmente excluir este componente curricular?')) return;

    const service = this.svc;
    if (service) {
      service.delete(id).subscribe({
        next: () => {
          this.curriculums = this.curriculums.filter(c => c.id !== id);
          this.refreshCurriculums();
          alert('Componente curricular excluído com sucesso!');
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao excluir componente curricular.');
        }
      });
    } else {
      this.curriculums = this.curriculums.filter(c => c.id !== id);
      this.refreshCurriculums();
      console.log('Currículo excluído (local) com sucesso!');
    }
  }

  onCancelAdd() {
    this.resetForm();
    console.log('Adição cancelada');
  }

  calculateTotalWorkload() {
    const practical = this.newCurriculum.practicalClasses || 0;
    const theoretical = this.newCurriculum.theoreticalClasses || 0;
    this.newCurriculum.totalWorkload = practical + theoretical;
  }

  private resetForm() {
    this.newCurriculum = {
      name: '',
      acronym: '',
      teacher: '',
      technologicalArea: '',
      practicalClasses: 0,
      theoreticalClasses: 0,
      modality: '',
      totalWorkload: 0
    };
  }
}

export interface Curriculum {
  id: number;
  name: string;
  acronym: string;
  teacher: string;
  technologicalArea: string;
  practicalClasses: number;
  theoreticalClasses: number;
  modality: string;
  totalWorkload: number;
}
