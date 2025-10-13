import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing-module';
import { Home } from './pages/home/home';

@NgModule({
  declarations: [
    Home
  ],
  imports: [CommonModule, TeacherRoutingModule],
})
export class TeacherModule {}
