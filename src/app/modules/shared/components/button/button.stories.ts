import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button'; // ajuste o caminho se for button.component.ts

const meta: Meta<ButtonComponent> = {
  title: 'Shared/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Define a aparência do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Define o tamanho do botão',
    },
    buttonClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [size]="size" (buttonClick)="buttonClick($event)">
      Botão Primário
    </app-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [size]="size" (buttonClick)="buttonClick($event)">
      Botão Secundário
    </app-button>`,
  }),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [size]="size" (buttonClick)="buttonClick($event)">
      Botão com Contorno
    </app-button>`,
  }),
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [size]="size" (buttonClick)="buttonClick($event)">
      Botão Grande
    </app-button>`,
  }),
};

export const Small: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [size]="size" (buttonClick)="buttonClick($event)">
      Botão Pequeno
    </app-button>`,
  }),
};
