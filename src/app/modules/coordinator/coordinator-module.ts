import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing-module';
import { Home } from './pages/home/home';
import { SharedModule } from "../shared/shared-module";

@NgModule({
  declarations: [
    Home
  ],
  imports: [CommonModule, CoordinatorRoutingModule, SharedModule],
})
export class CoordinatorModule {}
