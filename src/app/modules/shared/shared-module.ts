import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from './components/modal/modal';
import { Pagination } from './components/pagination/pagination';
import { Radios } from './components/radios/radios';



@NgModule({
  declarations: [
    Modal,
    Pagination,
    Radios
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
