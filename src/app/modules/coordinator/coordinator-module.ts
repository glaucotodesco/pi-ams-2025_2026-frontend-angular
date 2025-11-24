import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { HomePage } from './pages/home/home';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeachersPage } from './pages/teacher/teachers';
import { SubjetcPage } from './pages/subject/subjetc';
import { CoursesPage } from './pages/course/courses';

@NgModule({
  declarations: [HomePage, CoursesPage, TeachersPage, SubjetcPage],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [HomePage, CoursesPage, TeachersPage, SubjetcPage],
})
export class CoordinatorModule {}
