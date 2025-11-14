import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from '../../../shared/components/modal/modal';
import { CurriculumService } from '../../../../services/curriculum.service';
import { CurriculumProps } from '../../../../interfaces/CurriculumProps';

@Component({
  selector: 'app-curriculums',
  standalone: false,
  templateUrl: './curriculums.html',
  styleUrl: './curriculums.css',
})
export class Curriculums implements OnInit {
  @ViewChild('addModal') addModal!: ModalComponent;
  @ViewChild('editModal') editModal!: ModalComponent;

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
  curriculums: Curriculum[] = [];
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
  
  editingCurriculum: Partial<Curriculum> = {};
  editingId: number = 0;

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

  constructor(private curriculumService: CurriculumService) {}

  ngOnInit() {
    this.loadCurriculums();
  }

  loadCurriculums() {
    this.curriculumService.getAll().subscribe({
      next: (data) => {
        this.curriculums = data.map(item => ({
          id: item.id,
          name: item.name,
          acronym: item.abbreviation,
          teacher: 'Prof. Placeholder', // This field doesn't exist in CurriculumProps
          technologicalArea: item.technologyArea,
          practicalClasses: item.practical,
          theoreticalClasses: item.theoretical,
          modality: item.modality,
          totalWorkload: item.quantityClass
        }));
        this.refreshCurriculums();
      },
      error: (error) => {
        console.error('Erro ao carregar componentes curriculares:', error);
        alert('Erro ao carregar componentes curriculares. Verifique se o servidor está rodando.');
      }
    });
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
    this.addModal.open();
  }

  onAddCurriculum() {
    const curriculumData: CurriculumProps = {
      id: 0,
      name: this.newCurriculum.name || '',
      abbreviation: this.newCurriculum.acronym || '',
      courseId: 1, // Default courseId
      technologyArea: this.newCurriculum.technologicalArea || '',
      theoretical: this.newCurriculum.theoreticalClasses || 0,
      practical: this.newCurriculum.practicalClasses || 0,
      quantityClass: this.newCurriculum.totalWorkload || 0,
      modality: this.newCurriculum.modality || ''
    };
    
    this.curriculumService.create(curriculumData).subscribe({
      next: (created) => {
        console.log('Currículo adicionado com sucesso!', created);
        this.addModal.modalService.dismissAll();
        this.resetForm();
        this.loadCurriculums();
        alert('Componente curricular criado com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao criar componente curricular:', error);
        alert('Erro ao criar componente curricular. Tente novamente.');
      }
    });
  }

  onCancelAdd() {
    this.resetForm();
    console.log('Adição cancelada');
  }

  openEditModal(curriculum: Curriculum) {
    this.editingId = curriculum.id;
    this.editingCurriculum = { ...curriculum };
    this.editModal.open();
  }

  onEditCurriculum() {
    const curriculumData: CurriculumProps = {
      id: this.editingId,
      name: this.editingCurriculum.name || '',
      abbreviation: this.editingCurriculum.acronym || '',
      courseId: 1, // Default courseId
      technologyArea: this.editingCurriculum.technologicalArea || '',
      theoretical: this.editingCurriculum.theoreticalClasses || 0,
      practical: this.editingCurriculum.practicalClasses || 0,
      quantityClass: this.editingCurriculum.totalWorkload || 0,
      modality: this.editingCurriculum.modality || ''
    };
    
    this.curriculumService.update(this.editingId, curriculumData).subscribe({
      next: (updated) => {
        console.log('Currículo atualizado com sucesso!', updated);
        this.editModal.modalService.dismissAll();
        this.resetEditForm();
        this.loadCurriculums();
        alert('Componente curricular atualizado com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao atualizar componente curricular:', error);
        alert('Erro ao atualizar componente curricular. Tente novamente.');
      }
    });
  }

  onCancelEdit() {
    this.resetEditForm();
    console.log('Edição cancelada');
  }

  onDeleteCurriculum(id: number) {
    if (confirm('Tem certeza que deseja excluir este componente curricular?')) {
      this.curriculumService.delete(id).subscribe({
        next: () => {
          console.log('Currículo deletado com sucesso!');
          this.loadCurriculums();
          alert('Componente curricular excluído com sucesso!');
        },
        error: (error) => {
          console.error('Erro ao deletar componente curricular:', error);
          alert('Erro ao deletar componente curricular. Tente novamente.');
        }
      });
    }
  }

  calculateTotalWorkload() {
    const practical = this.newCurriculum.practicalClasses || 0;
    const theoretical = this.newCurriculum.theoreticalClasses || 0;
    this.newCurriculum.totalWorkload = practical + theoretical;
  }

  calculateEditTotalWorkload() {
    const practical = this.editingCurriculum.practicalClasses || 0;
    const theoretical = this.editingCurriculum.theoreticalClasses || 0;
    this.editingCurriculum.totalWorkload = practical + theoretical;
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

  private resetEditForm() {
    this.editingCurriculum = {};
    this.editingId = 0;
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
