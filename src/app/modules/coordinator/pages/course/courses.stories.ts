import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../../../../services/course/course-service';
import { CoursesPage } from './courses';
import { PeriodicityService } from '../../../../services/periodicity/periodicty-service';
import { ModalityService } from '../../../../services/modality/modality-service';
  
const meta: Meta<CoursesPage> = {
  title: 'Coordenador/Page/Courses',
  component: CoursesPage,
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
        PeriodicityService,
        ModalityService
      ],
    })
  ],
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<CoursesPage>;

export const Default: Story = {
  args: {
    filteredCourses: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};