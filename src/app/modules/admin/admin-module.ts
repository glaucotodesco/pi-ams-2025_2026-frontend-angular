import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './pages/home/home';
import { RemoveMe } from './components/remove-me/remove-me';



@NgModule({
  declarations: [
    Home,
    RemoveMe
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
