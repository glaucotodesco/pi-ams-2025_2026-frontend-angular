import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TeachersPage } from './teacher-page';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';

  const meta: Meta<TeachersPage> = {
  title: 'Coordenador/Page/Professor',
  component: TeachersPage,
   decorators: [
    moduleMetadata({
      imports: [CommonModule, NgbModule, SharedModule],
      declarations: [TeachersPage], 
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TeachersPage>;

// Story 1: Padrão com 4 cursos
export const Default:Story = {
  args: {
    teachers: [
      { id: 1, name: 'Ana Silva', type: 'Presencial', phone: '(11) 98765-4321', components: 'Matemática, Estatística, Cálculo' },
    { id: 2, name: 'Bruno Souza', type: 'EAD', phone: '(21) 99876-5432', components: 'Algoritmos, Estruturas de Dados' },
    { id: 3, name: 'Carla Pereira', type: 'Presencial', phone: '(31) 91234-5678', components: 'Banco de Dados, SQL, NoSQL' },
    { id: 4, name: 'Diego Santos', type: 'Presencial', phone: '(41) 93456-7890', components: 'Redes, Segurança da Informação' },
    { id: 5, name: 'Eduarda Lima', type: 'EAD', phone: '(51) 94567-8901', components: 'Engenharia de Software, UML' },
    { id: 6, name: 'Felipe Rocha', type: 'Presencial', phone: '(61) 95678-9012', components: 'Programação Web, Angular, TypeScript' },
    { id: 7, name: 'Gabriel Costa', type: 'Presencial', phone: '(71) 96789-0123', components: 'Sistemas Operacionais, Linux' },
    { id: 8, name: 'Helena Martins', type: 'EAD', phone: '(81) 97890-1234', components: 'Inteligência Artificial, Machine Learning' },
    { id: 9, name: 'Igor Almeida', type: 'Presencial', phone: '(85) 98901-2345', components: 'Arquitetura de Computadores' },
    { id: 10, name: 'Júlia Fernandes', type: 'Presencial', phone: '(92) 90012-3456', components: 'Design de Interação, UX' },
    { id: 11, name: 'Karen Ribeiro', type: 'EAD', phone: '(27) 91123-4567', components: 'Projeto Integrador, Metodologias Ágeis' },
    { id: 12, name: 'Lucas Oliveira', type: 'Presencial', phone: '(62) 92234-5678', components: 'DevOps, CI/CD, Docker' },
    ],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};

// Story 2: Lista vazia
export const Empty:Story = {
  args: {
    teachers: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};