import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { Home } from './pages/home/home';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeachersPage } from './pages/teacher/teacher-page';

import { SubjetcPage } from './pages/subject/subjetc';
import { Course } from './pages/course/course';

@NgModule({
  declarations: [Home, Course, TeachersPage,SubjetcPage],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [Home, Course, TeachersPage, SubjetcPage],

})
export class CoordinatorModule {}
