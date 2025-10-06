import { Meta, StoryObj } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

const meta: Meta<TextareaComponent> = {
  title: 'Components/Textarea',
  component: TextareaComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    showLabel: { control: 'boolean' },
    disabled: { control: 'boolean' },
    rows: { control: 'number' },
    cols: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Default: Story = {
  args: {
    label: 'Digite sua mensagem',
    showLabel: true,
    disabled: false,
    rows: 4,
    cols: 40,
  },
};

export const SemLabel: Story = {
  args: {
    label: 'Escondida',
    showLabel: false,
  },
};

export const Desativado: Story = {
  args: {
    label: 'Campo desativado',
    disabled: true,
  },
};
