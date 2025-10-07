import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { NavbarComponent } from './navbar';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Shared/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
} as Meta<NavbarComponent>;

type Story = StoryObj<NavbarComponent>;

export const Default: Story = {
  args: {
    menuItems: [
      { label: 'Home', path: '/' },
      { label: 'Teste', path: '/teste' },
      {
        label: 'Teste Dropdown',
        children: [
          { label: 'Teste Dropdown Item', path: '/teste/item1' },
        ],
      },
      { label: 'Contato', path: '/contato' },
    ],
  },
};
