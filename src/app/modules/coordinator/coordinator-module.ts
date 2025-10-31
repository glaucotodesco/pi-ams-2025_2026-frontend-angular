import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaModal } from './pages/salas/sala-modal/sala-modal';
import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { Cursos } from './pages/cursos/cursos';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Curriculums } from './pages/curriculum/curriculums';
import { TeachersPage } from './pages/teacher/teacher-page';
import { Home } from './pages/home/home';


@NgModule({
  declarations: [
    Home, Cursos, TeachersPage,Curriculums,SalaModal
  ],
  imports: [CommonModule, CoordinatorRoutingModule, FormsModule, SharedModule, NgbModule],
  exports: [Home, Cursos,TeachersPage, Curriculums, SalaModal],
})
export class CoordinatorModule {}
