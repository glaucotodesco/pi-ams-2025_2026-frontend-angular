import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing-module';
import { HomePage } from './pages/home/home';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [CommonModule, StudentRoutingModule],
})
export class SdudentModule {}
