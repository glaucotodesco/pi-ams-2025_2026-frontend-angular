import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { Home } from './pages/home/home';
import { Cursos } from './pages/cursos/cursos';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeachersPage } from './pages/teacher/teacher-page';
import { SubjetcPage } from './pages/subject/subjetcPage';


@NgModule({
  declarations: [
    Home, Cursos, TeachersPage,SubjetcPage
  ],
  imports: [CommonModule, CoordinatorRoutingModule, FormsModule, SharedModule, NgbModule],
  exports: [Home, Cursos,TeachersPage, SubjetcPage],
})
export class CoordinatorModule {}
