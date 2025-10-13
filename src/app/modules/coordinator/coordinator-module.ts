import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { SalaModal } from './pages/salas/sala-modal/sala-modal';

@NgModule({
  declarations: [
    SalaModal
  ],
  imports: [CommonModule, CoordinatorRoutingModule],
})
export class CoordinatorModule {}
