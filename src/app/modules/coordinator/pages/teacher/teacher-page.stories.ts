import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TeachersPage } from './teacher-page';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';

const meta: Meta<TeachersPage> = {
  title: 'Coordenador/Page/Professores',
  component: TeachersPage,

  decorators: [
    moduleMetadata({
      // 👉 Standalone NÃO entra em declarations
      // declarations: [TeachersPage], ❌ REMOVIDO

      // 👉 Standalone entra em IMPORTS
      imports: [
        TeachersPage,  // <-- importante
        CommonModule,
        NgbModule,
        SharedModule,  // modal genérico vem daqui
      ],
    }),
  ],

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TeachersPage>;

export const Default: Story = {
  args: {
    teachers: [
      {
        id: 1,
        name: 'Ana Silva',
        type: 'Presencial',
        phone: '(11) 98765-4321',
        components: 'Matemática, Estatística, Cálculo',
        email: 'ana.silva@example.com',
      },
      {
        id: 2,
        name: 'Bruno Souza',
        type: 'EAD',
        phone: '(21) 99876-5432',
        components: 'Algoritmos, Estruturas de Dados',
        email: 'bruno.souza@example.com',
      },
      // ...
    ],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};

export const Empty: Story = {
  args: {
    teachers: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};
