import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Curriculum } from './curriculum';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';

const meta: Meta<Curriculum> = {
  title: 'Coordenador/Page/Curriculum',
  component: Curriculum,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgbModule, SharedModule],
      declarations: [Curriculum],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Curriculum>;

export const Default:Story = {
  args: {
    professoresFiltrados: [
      { id: 1,
        nome: 'João Silva',
        professor: 'João Silva',
        aulasPraticas: 10,
        aulasTeoricas: 20,
        modalidade: 'Presencial',
        curso: 'Analise em Desenvolvimento de Sistemas'
      },
      { id: 2,
        nome: 'Maria Souza',
        professor: 'Maria Souza',
        aulasPraticas: 15,
        aulasTeoricas: 15,
        modalidade: 'Híbrido',
        curso: 'Gestão Empresarial'
      },
      { id: 3,
        nome: 'Carlos Lima',
        professor: 'Carlos Lima',
        aulasPraticas: 8,
        aulasTeoricas: 22,
        modalidade: 'Presencial',
        curso: 'Matemática'
      },
      { id: 4,
        nome: 'Ana Paula',
        professor: 'Ana Paula',
        aulasPraticas: 12,
        aulasTeoricas: 18,
        modalidade: 'Presencial',
        curso: 'Gestão de Eventos'
      },
    ]
  },
};

export const Empty:Story = {
  args: {
    professoresFiltrados: []
  },
};