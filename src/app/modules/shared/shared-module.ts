import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from './components/modal/modal';
import { Radios } from './components/radios/radios';



@NgModule({
  declarations: [
    Modal,
    Radios
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
