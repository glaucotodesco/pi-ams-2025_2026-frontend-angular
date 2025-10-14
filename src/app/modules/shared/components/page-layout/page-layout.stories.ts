import { Meta, StoryObj } from '@storybook/angular';
import { PageLayout } from './page-layout';

export default {
  title: 'Shared/Components/PageLayout',
  component: PageLayout,
} as Meta<PageLayout>;

type Story = StoryObj<PageLayout>;

export const Default: Story = {
  args: {
    title: 'Página de Exemplo',
    paddingClass: 'p-4',
    marginClass: 'my-3 mx-auto',
    fluid: false
  },
};
