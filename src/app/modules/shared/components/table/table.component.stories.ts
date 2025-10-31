import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Table } from './table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const meta: Meta<Table> = {
    title: 'Shared/Components/Table',
    component: Table,
    decorators: [
        moduleMetadata({
           imports: [CommonModule, NgbModule],
            declarations: [Table],
        }),
    ],
    argTypes: {
        columns: { control: { type: 'object' } },
    },
};

export default meta;
type Story = StoryObj<Table>;

export const Default: Story = {
    args: {
        columns: ["Foto", "Nome", "Tipo de usuário", "Telefone", "Email", "Componentes"],
    },
    render: (args) => ({
        props: args,
        template: `
      <app-table [columns]="columns">
        <tr>
          <td>
            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="foto" class="rounded-circle" width="32" height="32" />
          </td>
          <td>Amauri dos Santos</td>
          <td>Professor(a)</td>
          <td>(11) 9874-8899</td>
          <td>email@gmail.com</td>
          <td>Interação Hum...</td>
          <td class="text-center">
            <button class="btn btn-link text-dark p-0 me-2">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-link text-danger p-0">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="foto" class="rounded-circle" width="32" height="32" />
          </td>
          <td>Amauri dos Santos</td>
          <td>Professor(a)</td>
          <td>(11) 9874-8899</td>
          <td>email@gmail.com</td>
          <td>Interação Hum...</td>
          <td class="text-center">
            <button class="btn btn-link text-dark p-0 me-2">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-link text-danger p-0">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="foto" class="rounded-circle" width="32" height="32" />
          </td>
          <td>Amauri dos Santos</td>
          <td>Professor(a)</td>
          <td>(11) 9874-8899</td>
          <td>email@gmail.com</td>
          <td>Interação Hum...</td>
          <td class="text-center">
            <button class="btn btn-link text-dark p-0 me-2">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-link text-danger p-0">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </app-table>
    `,
    }),
};
