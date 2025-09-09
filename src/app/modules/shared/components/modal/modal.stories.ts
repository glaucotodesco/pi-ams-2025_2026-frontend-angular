import type { Meta, StoryObj } from '@storybook/angular';
import { Modal } from './modal';

const meta: Meta<Modal> = {
  title: 'Shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Modal>;

export const Default: Story = {};