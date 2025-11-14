import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from '../checkbox/checkbox';


const meta: Meta<CheckboxComponent> = {
  title: 'Shared/Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    checkedChange: { action: 'checkedChange' },
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    label: 'Opção 1',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Opção 1',
    checked: true,
  },
};
