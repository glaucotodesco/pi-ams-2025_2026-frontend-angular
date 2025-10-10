import type { Meta, StoryObj } from '@storybook/angular';

// Importa o componente que estamos documentando
import { SalaComponent } from './sala.component'; 

// --- DADOS DE EXEMPLO (MOCK DATA) ---
// Simula a estrutura de dados que o seu componente Angular receberia.
const mockLabs = [
  {
    id: 1,
    nome: 'Lab 1',
    tipo: 'Laboratório',
    localizacao: 'Bloco A',
    andar: '1º',
    capacidade: 30,
    itens: '30 computadores, Projetor 4k',
    especificacoes: 'Windows 11, VS Code, Docker, Java 17',
  },
  {
    id: 2,
    nome: 'Sala 102',
    tipo: 'Sala de Aula',
    localizacao: 'Bloco B',
    andar: '2º',
    capacidade: 40,
    itens: '40 cadeiras, Lousa Interativa',
    especificacoes: 'Sem software específico',
  },
  {
    id: 3,
    nome: 'Lab 3',
    tipo: 'Laboratório',
    localizacao: 'Bloco C',
    andar: '3º',
    capacidade: 20,
    itens: '20 notebooks, 20 cadeiras',
    especificacoes: 'Visual Studio Code, My SQL Server...',
  },
];

// --- META DATA DO COMPONENTE ---
const meta: Meta<SalaComponent> = {
  // Título da história no Storybook
  title: 'Pages/Salas/Sala Listagem',
  
  // Componente a ser renderizado
  component: SalaComponent,

  // Tags para organização (opcional)
  tags: ['autodocs'],

  // Configuração dos 'args' (propriedades de entrada do componente)
  // Assumimos que o componente aceita um input 'labs' com a lista de dados
  argTypes: {
    // Definir controles para as propriedades que o componente receberia
    // Por exemplo, se o componente tivesse um input 'loading: boolean'
    // loading: { control: 'boolean' }, 
  },
  
  // Args padrão para todas as histórias
  args: {
    // No Angular, o componente usaria esta propriedade
    labs: mockLabs,
  }
};

export default meta;

// --- DEFINIÇÃO DAS HISTÓRIAS (STORIES) ---
type Story = StoryObj<SalaComponent>;

/**
 * História padrão que exibe a lista completa de laboratórios.
 */
export const Default: Story = {
  args: {
    // Usa os args definidos no meta
  },
};

/**
 * História que simula o componente com uma lista vazia.
 * Isso é importante para verificar o estado de "sem dados".
 */
export const EmptyList: Story = {
  args: {
    // Sobrescreve a propriedade 'labs' com um array vazio
    labs: [], 
  },
  parameters: {
    // Adiciona uma pequena nota na documentação
    docs: {
      description: {
        story: 'Exibe o componente quando não há dados para serem listados (lista vazia).',
      },
    },
  },
};

/**
 * História que simula um grande número de itens
 * (útil para testar o scroll da tabela e paginação).
 */
export const LargeList: Story = {
  args: {
    // Cria uma lista com 20 itens para simular um volume maior de dados
    labs: Array(20).fill(mockLabs[0]).map((lab, index) => ({
      ...lab,
      id: index + 1,
      nome: `Lab de Teste ${index + 1}`,
      // Adicionar lógica de paginação se for no componente
    })),
  },
};