import { Meta, StoryObj } from '@storybook/angular';
import { TextareaComponent } from '../app/components/textarea/textarea.component';

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
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Default: Story = {
  args: {
    label: 'Descrição',
    showLabel: true,
    disabled: false,
    rows: 4,
    cols: 40,
    placeholder: 'Digite aqui...',
  },
};
