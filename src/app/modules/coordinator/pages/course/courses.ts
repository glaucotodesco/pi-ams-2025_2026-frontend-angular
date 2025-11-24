// src/app/modules/coordinator/pages/course/courses.ts

import { Component, Input, ViewChild } from '@angular/core';
import { CourseProps } from '../../../../interfaces/CourseProps';
import { ModalComponent } from '../../../shared/components/modal/modal';

// Interface para o novo formulário do modal de curso,
// com todos os campos que aparecem no design.
export interface NewCourseProps {
  name: string;
  acronym: string;
  technologicalAxis: string;
  offeringType: string;
  durationHours: number;
  modality: string;
  semesters: string;
  coordinator: string;
}


@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
  standalone: false,
})

export class CoursesPage {
  // Referência ao modal genérico no template
  @ViewChild('modal') modal!: ModalComponent;

  columns: string[] = ["id","Nome", "Modalidade", "Eixo Tecnologico", "Num Componentes", ""];
  @Input() courses: CourseProps[] = [
   { id: 1, 
        name: 'Analise em Desenvolvimento de Sistemas', 
        modality: 'Presencial', 
        technologicalAxis: 'informação e comunicação', 
        componentsCount: 28
       },

      {  id: 2, 
        name: 'gestão Empresarial', 
        modality: 'Presencial', 
        technologicalAxis: 'Gestão e Negócios', 
        componentsCount: 30
      },

      {  id: 3, 
        name: 'matematica', 
        modality: 'Presencial', 
        technologicalAxis: 'Matemática e suas Tecnologias', 
        componentsCount: 25
      },

      {  id: 4, 
        name: 'Gestão de Eventos', 
        modality: 'hibrido', 
        technologicalAxis: 'informação e comunicação', 
        componentsCount: 35 
      },
  ];

  // Dados do formulário para o novo curso (Partial para TS aceitar inicialização vazia)
  newCourse: Partial<NewCourseProps> = {
    name: '',
    acronym: '',
    technologicalAxis: '',
    offeringType: '',
    durationHours: 0,
    modality: '',
    semesters: '',
    coordinator: ''
  };

  // Listas de opções para os Selects (usados no HTML com app-select)
  technologicalAxes: string[] = ['Informação e Comunicação', 'Gestão e Negócios', 'Matemática e suas Tecnologias', 'Outro'];
  offeringTypes: string[] = ['Semestral', 'Anual'];
  modalities: string[] = ['Presencial', 'Híbrido', 'EAD'];
  semestersOptions: string[] = ['2 semestres', '4 semestres', '6 semestres', '8 semestres'];
  coordinators: string[] = ['Tadeu Maffeis', 'Prof. Ana Silva', 'Prof. João Souza'];

  @Input() page = 1;
  @Input() pageSize = 8;
  @Input() collectionSize = 0;
  @Input() searchTerm = '';

  showSearch = false; // controla visibilidade do input

  get filteredCourses(): CourseProps[] {
    const filtered = this.courses.filter(c =>
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

  refreshCourses() {
    this.collectionSize = this.courses.length;
  }

  // Função chamada ao clicar em "Cadastrar" no modal (Corrigida)
  onSaveCourse() {
    // CORREÇÃO DO ERRO: Garante que todos os IDs são números (ou 0) para Math.max
    const newId = Math.max(...this.courses.map(c => c.id || 0), 0) + 1;
    
    // Simulação do novo curso
    const newCourseData: CourseProps = {
      id: newId,
      name: this.newCourse.name || 'Novo Curso',
      modality: this.newCourse.modality || 'Não Definida',
      technologicalAxis: this.newCourse.technologicalAxis || 'Não Definido',
      componentsCount: 0 
    };

    this.courses.push(newCourseData);
    this.refreshCourses();
    
    // Fechar e resetar
    this.modal.modalService.dismissAll();
    this.resetForm();
    console.log('Curso Cadastrado:', newCourseData);
  }

  // Função chamada ao clicar em "Cancelar" ou ao fechar o modal
  onCancelAdd() {
    this.resetForm();
    this.modal.modalService.dismissAll();
    console.log('Cadastro de curso cancelado.');
  }

  // Função para limpar os campos do formulário
  private resetForm() {
    this.newCourse = {
      name: '',
      acronym: '',
      technologicalAxis: '',
      offeringType: '',
      durationHours: 0,
      modality: '',
      semesters: '',
      coordinator: ''
    };
  }
}