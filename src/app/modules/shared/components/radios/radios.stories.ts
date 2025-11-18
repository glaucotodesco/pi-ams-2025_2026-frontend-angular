import type { Meta, StoryObj } from '@storybook/angular';
import { Radios } from './radios';

const meta: Meta<Radios> = {
  title: 'Shared/Components/Radios',
  component: Radios,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Radios>;

export const Default: Story = {

 args: {
    label: 'Sim',
    value: 'sim',
    name: 'nome',
  },
};

export const Custom: Story = {

 args: {
    label: 'Custom radio',
    value: 'custom',
    name: 'custom-form',
  },
};