import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Pagination } from './pagination';

const meta: Meta<Pagination> = {
  title: 'Shared/Pagination',
  component: Pagination,
  decorators: [
    moduleMetadata({
      declarations: [Pagination],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    totalPages: { control: { type: 'number', min: 1, max: 50 } },
    currentPage: { control: { type: 'number', min: 1 } },
    pageChange: { action: 'pageChange' },
  },
};

export default meta;
type Story = StoryObj<Pagination>;

export const Default: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
  },
};

export const MiddlePage: Story = {
  args: {
    totalPages: 10,
    currentPage: 5,
  },
};

export const LastPage: Story = {
  args: {
    totalPages: 10,
    currentPage: 10,
  },
};
