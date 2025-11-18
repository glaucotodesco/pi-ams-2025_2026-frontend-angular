import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { Course } from './course';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../../../../services/CourseService';

const meta: Meta<Course> = {
  title: 'Coordenador/Page/Courses',
  component: Course,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgbModule,
        SharedModule,
        HttpClientModule
      ],
      providers: [
        CourseService 
      ],
    })
  ],
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<Course>;

export const Default: Story = {
  args: {
    courses: [
      { id: 1, name: 'ADS', description: 'Curso técnico de ADS' },
      { id: 2, name: 'Gestão', description: 'Administração' }
    ],
    page: 1,
    pageSize: 8,
    searchTerm: '',
    showSearch: false,
    columns: ['id', 'Name', 'Description', '']
  }
};

export const Empty: Story = {
  args: {
    filteredCourses: [],
    page: 1,
    pageSize: 8,
    searchTerm: '',
  },
};