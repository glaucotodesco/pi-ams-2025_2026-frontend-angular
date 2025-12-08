import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AccessLevelPage } from './access-level';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { AccessLevelService } from '../../../../services/access-level/access-level-service';
import { HttpClientModule } from '@angular/common/http';

const meta: Meta<AccessLevelPage> = {
  title: 'Coordenador/Page/Níveis de Acesso',
  component: AccessLevelPage,

  decorators: [
     moduleMetadata({
      imports: [
        CommonModule,
        NgbModule,
        SharedModule,
        HttpClientModule
      ],
      providers: [
        AccessLevelService
      ],
    }),
  ],

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AccessLevelPage>;

export const Default: Story = {
  args: {
    accessLevels: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};
