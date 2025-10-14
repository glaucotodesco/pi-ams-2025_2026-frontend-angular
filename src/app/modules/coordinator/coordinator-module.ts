import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { Home } from './pages/home/home';

@NgModule({
  declarations: [
    Home
  ],
  imports: [CommonModule, CoordinatorRoutingModule],
})
export class CoordinatorModule {}
