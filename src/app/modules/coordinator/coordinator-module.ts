import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { Home } from './pages/home/home';
import { Cursos } from './pages/cursos/cursos';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Curriculums } from './pages/curriculum/curriculums';

@NgModule({
  declarations: [
    Home, Cursos, Curriculums
  ],
 imports: [CommonModule, CoordinatorRoutingModule, FormsModule, SharedModule, NgbModule],
  exports: [Home, Cursos,Curriculums],
})
export class CoordinatorModule {}
