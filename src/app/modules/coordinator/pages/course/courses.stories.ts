import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Courses } from './courses';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';

  const meta: Meta<Courses> = {
  title: 'Coordenador/Page/Courses',
  component: Courses,
   decorators: [
    moduleMetadata({
      imports: [CommonModule, NgbModule, SharedModule],
      declarations: [Courses], 
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Courses>;

// Story 1: Padrão com 4 
export const Default:Story = {
  args: {
    courses: [
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
    ],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};

// Story 2: Lista vazia
export const Empty:Story = {
  args: {
    courses: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};