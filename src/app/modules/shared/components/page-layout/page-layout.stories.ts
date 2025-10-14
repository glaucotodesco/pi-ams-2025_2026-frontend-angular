import { Meta, StoryObj } from '@storybook/angular';
import { PageLayout } from './page-layout';

export default {
  title: 'Shared/Components/PageLayout',
  component: PageLayout,
} as Meta<PageLayout>;

type Story = StoryObj<PageLayout>;

export const WithTitle: Story = {
  args: {
    title: 'Página de Exemplo',
    fluid: false
  },
  render: (args) => ({
    props: args,
    template: `
      <app-page-layout 
        [title]="title"
        [fluid]="fluid"
      >
        <p>Conteúdo da página de exemplo.</p>
      </app-page-layout>
    `
  })
};

export const WithoutTitle: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
      <app-page-layout>
        <p>Conteúdo da página de exemplo.</p>
      </app-page-layout>
    `
  })
}

export const Fluid: Story = {
  args: {
    title: 'Página de Exemplo',
    fluid: true
  },
  render: (args) => ({
    props: args,
    template: `
      <app-page-layout 
        [title]="title"
        [fluid]="fluid"
      >
        <p>Conteúdo da página de exemplo.</p>
      </app-page-layout>
    `
  })
};

export const CustomPaddingAndMargin: Story = {
  args: {
    title: 'Página de Exemplo',
    paddingClass: 'p-10',
    marginClass: 'mx-auto',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-page-layout 
        [title]="title"
        [paddingClass]="paddingClass"
        [marginClass]="marginClass"
      >
        <p>Conteúdo da página de exemplo.</p>
      </app-page-layout>
    `
  })
}
