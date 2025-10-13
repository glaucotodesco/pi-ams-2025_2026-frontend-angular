import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../shared/components/modal/modal';
import { Pagination } from './components/pagination/pagination';
import { Radios } from './components/radios/radios';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './components/button/button';
import { InputComponent } from './components/input/input';


@NgModule({
  declarations: [
    ModalComponent,
    Pagination,
    Radios,
    ButtonComponent,
    NavbarComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    ModalComponent,
    Pagination,
    Radios,
    ButtonComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
