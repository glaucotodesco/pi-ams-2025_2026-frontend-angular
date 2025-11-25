import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TeachersPage } from './teachers';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { TeacherService } from '../../../../services/teacher/teacher-service';
import { HttpClientModule } from '@angular/common/http';

const meta: Meta<TeachersPage> = {
  title: 'Coordenador/Page/Professores',
  component: TeachersPage,

  decorators: [
     moduleMetadata({
      imports: [
        CommonModule,
        NgbModule,
        SharedModule,
        HttpClientModule
      ],
      providers: [
        TeacherService
      ],
    }),
  ],

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TeachersPage>;

export const Default: Story = {
  args: {
    teachers: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};
