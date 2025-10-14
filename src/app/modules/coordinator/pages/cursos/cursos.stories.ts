import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Cursos } from './cursos';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';

  const meta: Meta<Cursos> = {
  title: 'Coordenador/Page/Cursos',
  component: Cursos,
   decorators: [
    moduleMetadata({
      imports: [CommonModule, NgbModule, SharedModule],
      declarations: [Cursos], 
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Cursos>;

// Story 1: Padrão com 4 cursos
export const Default:Story = {
  args: {
    cursos: [
      { id: 1, 
        nome: 'Analise em Desenvolvimento de Sistemas', 
        modalidade: 'Presencial', 
        eixotecnologico: 'informação e comunicação', 
        numerocomponentes: 28
       },

      {  id: 2, 
        nome: 'gestão Empresarial', 
        modalidade: 'Presencial', 
        eixotecnologico: 'Gestão e Negócios', 
        numerocomponentes: 30
      },

      {  id: 3, 
        nome: 'matematica', 
        modalidade: 'Presencial', 
        eixotecnologico: 'Matemática e suas Tecnologias', 
        numerocomponentes: 25
      },

      {  id: 4, 
        nome: 'Gestão de Eventos', 
        modalidade: 'hibrido', 
        eixotecnologico: 'informação e comunicação', 
        numerocomponentes: 35 
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
    cursos: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};