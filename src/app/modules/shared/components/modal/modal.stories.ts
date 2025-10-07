import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ModalComponent } from './modal';
import { ButtonComponent } from '../button/button'; 
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export default {
  title: 'shared/Modal',
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgbModule],
      declarations: [ModalComponent, ButtonComponent], 
    }),
  ],
} as Meta<ModalComponent>;

const Template: StoryFn<ModalComponent> = (args) => ({
  props: args,
  template: `
    <app-modal-generic
      #modal
      [title]="title"
      [actionText]="actionText"
      [actionText2]="actionText2"
      [actionFunction]="actionFunction">
    </app-modal-generic>

    <app-button
      variant="primary"
      size="md"
      (buttonClick)="modal.open()">
      Abrir Modal
    </app-button>
  `
});

export const Default = Template.bind({});
Default.args = {
  title: 'Modal Title',
  actionText: 'Action',
  actionText2: 'Cancelar',
  actionFunction: () => alert('Função executada!'),
};
