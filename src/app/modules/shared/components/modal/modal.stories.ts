import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ModalGenericComponent } from './modal';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export default {
  title: 'Components/ModalGeneric',
  component: ModalGenericComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgbModule, ModalGenericComponent],
    }),
  ],
} as Meta<ModalGenericComponent>;

const Template: StoryFn<ModalGenericComponent> = (args) => ({
  props: args,
  template: `
    <app-modal-generic
      #modal
      [title]="title"
      [actionText]="actionText"
      [actionText2]="actionText2"
      [actionFunction]="actionFunction">
    </app-modal-generic>
    <button (click)="modal.open()">Abrir Modal</button>
  `
});

export const Default = Template.bind({});
Default.args = {
  title: 'Modal Title',
  actionText: 'Action',
  actionText2: 'Cancelar',
  actionFunction: () => alert('Função executada!'),
};
