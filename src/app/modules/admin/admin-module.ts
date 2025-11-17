import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './pages/home/home';
import { AdminRoutingModule } from './admin-routing-module';

@NgModule({
  declarations: [Home],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
