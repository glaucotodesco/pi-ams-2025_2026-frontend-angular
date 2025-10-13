import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing-module';
import { Home } from './pages/home/home';

@NgModule({
  declarations: [
    Home
  ],
  imports: [CommonModule, StudentRoutingModule],
})
export class SdudentModule {}
