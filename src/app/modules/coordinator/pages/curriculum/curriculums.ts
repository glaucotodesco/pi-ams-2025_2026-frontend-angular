import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../shared/components/modal/modal';

@Component({
  selector: 'app-curriculums',
  standalone: false,
  templateUrl: './curriculums.html',
  styleUrl: './curriculums.css',
})
export class CurriculumsPage {
  @ViewChild('addModal') addModal!: ModalComponent;

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
    this.addModal.open();
  }

  onAddCurriculum() {
    const newId = Math.max(...this.curriculums.map(c => c.id)) + 1;
    
    const curriculum: Curriculum = {
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
    
    this.curriculums.push(curriculum);
    
    this.addModal.modalService.dismissAll();
    
    this.resetForm();
    
    this.refreshCurriculums();
    
    console.log('Currículo adicionado com sucesso!', curriculum);
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
