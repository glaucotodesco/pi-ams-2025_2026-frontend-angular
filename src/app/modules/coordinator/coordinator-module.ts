import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { Home } from './pages/home/home';
import { Cursos } from './pages/cursos/cursos';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    Home, Cursos
  ],
  imports: [CommonModule, CoordinatorRoutingModule, FormsModule, SharedModule],
  exports: [Home, Cursos],
})
export class CoordinatorModule {}
