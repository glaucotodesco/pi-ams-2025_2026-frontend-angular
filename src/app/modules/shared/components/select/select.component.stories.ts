import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const meta: Meta<SelectComponent> = {
  title: 'Components/Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [SelectComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    item1: { control: 'text' },
    item2: { control: 'text' },
    item3: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  args: {
    item1: 'Item 1',
    item2: 'Item 2',
    item3: 'Item 3',
  },
};

