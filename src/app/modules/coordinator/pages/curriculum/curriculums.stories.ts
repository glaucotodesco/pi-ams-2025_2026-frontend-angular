import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Curriculums } from './curriculums';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';

const meta: Meta<Curriculums> = {
  title: 'Coordenador/Page/Curriculums',
  component: Curriculums,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgbModule, SharedModule],
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
        teacher: 'Prof. João Silva',
        technologicalAxis: 'Informação e Comunicação',
        practicalClasses: 400,
        theoreticalClasses: 200,
        modality: 'Presencial',
      },
      {
        id: 2,
        name: 'Redes de Computadores',
        teacher: 'Prof. Maria Santos',
        technologicalAxis: 'Informação e Comunicação',
        practicalClasses: 350,
        theoreticalClasses: 250,
        modality: 'Híbrido',
      },
      {
        id: 3,
        name: 'Automação Industrial',
        teacher: 'Prof. Carlos Oliveira',
        technologicalAxis: 'Controle e Processos Industriais',
        practicalClasses: 450,
        theoreticalClasses: 150,
        modality: 'Presencial',
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
