import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home/home';
import { AdminRoutingModule } from './admin-routing-module';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
