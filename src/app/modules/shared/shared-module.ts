import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from './components/modal/modal';
import { Pagination } from './components/pagination/pagination';
import { Radios } from './components/radios/radios';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Button } from './components/button/button';

@NgModule({
  declarations: [
    Modal,
    Pagination,
    Radios,
    NavbarComponent,
    Button
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    Modal,
    Pagination,
    Radios,
    NavbarComponent
  ]
})
export class SharedModule { }
