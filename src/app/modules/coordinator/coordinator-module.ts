import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { HomePage } from './pages/home/home';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurriculumsPage } from './pages/curriculum/curriculums';
import { TeachersPage } from './pages/teacher/teachers';
import { CoursesPage } from './pages/course/courses';

@NgModule({
  declarations: [HomePage, CoursesPage, TeachersPage, CurriculumsPage],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
  ],
  exports: [HomePage, CoursesPage, TeachersPage, CurriculumsPage],
})
export class CoordinatorModule {}
