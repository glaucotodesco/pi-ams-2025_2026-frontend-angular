import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { UsersPage } from './users';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { UserService } from '../../../../services/user/user-service';
import { HttpClientModule } from '@angular/common/http';
import { AccessLevelService } from '../../../../services/access-level/access-level-service';

const meta: Meta<UsersPage> = {
  title: 'Coordenador/Page/Usuários',
  component: UsersPage,

  decorators: [
     moduleMetadata({
      imports: [
        CommonModule,
        NgbModule,
        SharedModule,
        HttpClientModule
      ],
      providers: [
        UserService,
        AccessLevelService
      ],
    }),
  ],

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UsersPage>;

export const Default: Story = {
  args: {
    users: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};
