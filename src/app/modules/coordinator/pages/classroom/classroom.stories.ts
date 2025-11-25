import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../../../../services/course/course-service';
import { ClassroomPage } from './classroom';
  
const meta: Meta<ClassroomPage> = {
  title: 'Coordenador/Page/Classroom',
  component: ClassroomPage,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgbModule,
        SharedModule,
        HttpClientModule
      ],
      providers: [
        CourseService,
      ],
    })
  ],
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<ClassroomPage>;

export const Default: Story = {
  args: {
    filteredClassrooms: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};