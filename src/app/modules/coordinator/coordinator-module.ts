import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';

import { CoordinatorRoutingModule } from './coordinator-routing-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoordinatorRoutingModule, TeacherPageComponent],
})
export class CoordinatorModule {}
