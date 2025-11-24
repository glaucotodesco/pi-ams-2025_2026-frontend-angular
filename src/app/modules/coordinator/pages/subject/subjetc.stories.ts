import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Curriculums } from './subjetcPage';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';

const meta: Meta<Curriculums> = {
  title: 'Coordenador/Page/Curriculums',
  component: Curriculums,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, NgbModule, SharedModule],
      declarations: [Curriculums],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Curriculums>;

export const Default: Story = {
  args: {
    curriculums: [
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
      },
    ],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};

export const Empty: Story = {
  args: {
    filteredCurriculums: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};
