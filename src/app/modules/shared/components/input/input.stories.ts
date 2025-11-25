import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  title: 'Shared/Components/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    type: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

const storyTemplate = (args: any) => ({
  props: args,
  template: `
    <div style="padding:1rem">
      <app-input
        [type]="type"
        [label]="label"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        [required]="required"
        [readonly]="readonly"
        [class]="class"
        (valueChange)="valueChange($event)"
        (focusEvent)="focusEvent()"
        (blurEvent)="blurEvent()"
      ></app-input>
    </div>
  `,
});

export const Default: Story = {
  args: {
    type: 'text',
    label: 'Nome',
    placeholder: 'Digite seu nome',
    value: '',
    disabled: false,
  },
  render: storyTemplate,
};

export const ComValor: Story = {
  args: {
    type: 'text',
    label: 'Nome',
    placeholder: 'Digite seu nome',
    value: 'Exemplo',
    disabled: false,
  },
  render: storyTemplate,
};

export const Desabilitado: Story = {
  args: {
    type: 'text',
    label: 'Nome',
    placeholder: 'Digite seu nome',
    value: 'Não editável',
    disabled: true,
  },
  render: storyTemplate,
};

export const ApenasLeitura: Story = {
  args: {
    type: 'text',
    label: 'Nome',
    placeholder: 'Digite seu nome',
    value: 'Somente leitura',
    disabled: false,
  },
  render: storyTemplate,
};
