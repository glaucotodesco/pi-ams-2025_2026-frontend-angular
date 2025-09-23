import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from './components/modal/modal';
import { Pagination } from './components/pagination/pagination';



@NgModule({
  declarations: [
    Modal,
    Pagination
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
