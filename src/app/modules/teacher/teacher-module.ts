import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing-module';
import { HomePage } from './pages/home/home';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [CommonModule, TeacherRoutingModule],
})
export class TeacherModule {}
