import { Meta } from '@storybook/angular';
import { TeacherPageComponent } from './teacher-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

const meta: Meta<TeacherPageComponent> = {
  title: 'Pages/TeacherPage',
  component: TeacherPageComponent,
  parameters: {
    angular: {
      moduleMetadata: {
        imports: [CommonModule, FormsModule, NgbPaginationModule],
      },
    },
  },
};

export default meta;

// ----------------------------
// Story 1: Padrão com 6 professores
export const Default = {
  args: {
    teachers: [
      {
        foto: 'https://randomuser.me/api/portraits/men/11.jpg',
        nome: 'João Silva',
        tipo: 'Professor',
        telefone: '(11) 90000-0001',
        email: 'joao@email.com',
        componentes: 'Matemática',
      },
      {
        foto: 'https://randomuser.me/api/portraits/women/21.jpg',
        nome: 'Maria Souza',
        tipo: 'Professora',
        telefone: '(11) 90000-0002',
        email: 'maria@email.com',
        componentes: 'Física',
      },
      {
        foto: 'https://randomuser.me/api/portraits/men/31.jpg',
        nome: 'Carlos Lima',
        tipo: 'Professor',
        telefone: '(11) 90000-0003',
        email: 'carlos@email.com',
        componentes: 'Química',
      },
      {
        foto: 'https://randomuser.me/api/portraits/women/41.jpg',
        nome: 'Ana Paula',
        tipo: 'Coordenadora',
        telefone: '(11) 90000-0004',
        email: 'ana@email.com',
        componentes: 'Biologia',
      },
      {
        foto: 'https://randomuser.me/api/portraits/men/51.jpg',
        nome: 'Rafael Costa',
        tipo: 'Coordenador',
        telefone: '(11) 90000-0005',
        email: 'rafael@email.com',
        componentes: 'História',
      },
      {
        foto: 'https://randomuser.me/api/portraits/women/61.jpg',
        nome: 'Juliana Martins',
        tipo: 'Professora',
        telefone: '(11) 90000-0006',
        email: 'juliana@email.com',
        componentes: 'Geografia',
      },
    ],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};


// ----------------------------
// Story 2: Sem professores
export const Empty = {
  args: {
    teachers: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};


