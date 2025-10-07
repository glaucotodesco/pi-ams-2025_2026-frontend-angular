import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectComponent } from './select.component';

const meta: Meta<SelectComponent> = {
  title: 'Components/Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [SelectComponent],
      imports: [CommonModule, NgbModule],
    }),
  ],
  argTypes: {
    itens: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<SelectComponent>;

const storyTemplate = (args: any) => ({
  props: args,
  template: `<div style="padding:1rem"><app-select [itens]="itens"></app-select></div>`,
});

export const Default: Story = {
  args: { itens: ['Item 1', 'Item 2', 'Item 3'] },
  render: storyTemplate,
};

export const Vazio: Story = {
  args: { itens: [] },
  render: storyTemplate,
};

export const Muitos: Story = {
  args: { itens: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'] },
  render: storyTemplate,
};