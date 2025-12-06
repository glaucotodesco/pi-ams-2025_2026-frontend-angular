import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectEntityComponent } from './select-entity';

const meta: Meta<SelectEntityComponent> = {
  title: 'Shared/Components/SelectEntity',
  component: SelectEntityComponent,
  decorators: [
    moduleMetadata({
      declarations: [SelectEntityComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
  ],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    items: { control: 'object' },
    valueField: { control: 'text' },
    textField: { control: 'text' },
    errorMessage: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SelectEntityComponent>;

const storyTemplate = (args: any) => ({
  props: args,
  template: `
    <div style="padding:1rem; max-width: 400px;">
      <app-select-entity
        [label]="label"
        [placeholder]="placeholder"
        [items]="items"
        [valueField]="valueField"
        [textField]="textField"
        [errorMessage]="errorMessage"
      ></app-select-entity>
    </div>
  `,
});

export const Default: Story = {
  args: {
    label: 'Nível de Acesso',
    placeholder: 'Selecione um nível',
    items: [
      { id: 1, description: 'Administrador' },
      { id: 2, description: 'Coordenador' },
      { id: 3, description: 'Professor' },
      { id: 4, description: 'Aluno' },
    ],
    valueField: 'id',
    textField: 'description',
    errorMessage: 'Campo obrigatório.',
  },
  render: storyTemplate,
};

export const Vazio: Story = {
  args: {
    label: 'Nível de Acesso',
    placeholder: 'Selecione um nível',
    items: [],
    valueField: 'id',
    textField: 'description',
    errorMessage: 'Campo obrigatório.',
  },
  render: storyTemplate,
};

export const Muitos: Story = {
  args: {
    label: 'Departamento',
    placeholder: 'Escolha um departamento',
    items: [
      { id: 1, description: 'TI - Tecnologia da Informação' },
      { id: 2, description: 'RH - Recursos Humanos' },
      { id: 3, description: 'Financeiro' },
      { id: 4, description: 'Vendas' },
      { id: 5, description: 'Marketing' },
      { id: 6, description: 'Operações' },
      { id: 7, description: 'Logística' },
      { id: 8, description: 'Qualidade' },
    ],
    valueField: 'id',
    textField: 'description',
    errorMessage: 'Este campo é obrigatório.',
  },
  render: storyTemplate,
};

export const CustomFields: Story = {
  args: {
    label: 'Curso',
    placeholder: 'Selecione um curso',
    items: [
      { codigo: 'CS101', nome: 'Ciência da Computação 101' },
      { codigo: 'ENG102', nome: 'Engenharia de Software 102' },
      { codigo: 'DATA103', nome: 'Ciência de Dados 103' },
    ],
    valueField: 'codigo',
    textField: 'nome',
    errorMessage: 'Selecione um curso válido.',
  },
  render: storyTemplate,
};

export const SemLabel: Story = {
  args: {
    label: '',
    placeholder: 'Selecione uma opção',
    items: [
      { id: 1, description: 'Opção 1' },
      { id: 2, description: 'Opção 2' },
      { id: 3, description: 'Opção 3' },
    ],
    valueField: 'id',
    textField: 'description',
  },
  render: storyTemplate,
};
