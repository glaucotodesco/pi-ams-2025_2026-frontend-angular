import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { HomePage } from './pages/home/home';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersPage } from './pages/user/users';
import { SubjetcPage } from './pages/subject/subjetc';
import { CoursesPage } from './pages/course/courses';
import { ClassroomPage } from './pages/classroom/classroom';
import { AccessLevelPage } from './pages/access-level/access-level';

@NgModule({
  declarations: [HomePage, CoursesPage, UsersPage, SubjetcPage, ClassroomPage, AccessLevelPage],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [HomePage, CoursesPage, UsersPage, SubjetcPage, ClassroomPage, AccessLevelPage],
})
export class CoordinatorModule {}
