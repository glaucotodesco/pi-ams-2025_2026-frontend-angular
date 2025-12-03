import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SubjetcPage } from './subjetc';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { SubjectService } from '../../../../services/subject/subject-service';
import { HttpClientModule } from '@angular/common/http';

const meta: Meta<SubjetcPage> = {
  title: 'Coordenador/Page/Subjects',
  component: SubjetcPage,
   decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgbModule,
        SharedModule,
        HttpClientModule
      ],
      providers: [
        SubjectService,
      ],
    })
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SubjetcPage>;

export const Default: Story = {
  args: {
    filteredSubjects: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};

