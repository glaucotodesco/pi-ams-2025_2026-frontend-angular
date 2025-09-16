import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './pages/home/home';
import { RemoveMe } from './components/remove-me/remove-me';
import { AdminRoutingModule } from './admin-routing-module';

@NgModule({
  declarations: [Home, RemoveMe],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
