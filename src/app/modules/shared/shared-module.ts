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
import { Login } from './pages/login/login';
import { Table } from './components/table/table';
import { CheckboxComponent } from './components/checkbox/checkbox';
import { PageLayout } from './components/page-layout/page-layout';
import { SelectComponent } from './components/select/select';
import { CardComponent } from './components/card/card';

@NgModule({
  declarations: [
    ModalComponent,
    Pagination,
    Radios,
    ButtonComponent,
    NavbarComponent,
    InputComponent,
    Login,
    Table,
    PageLayout,
    SelectComponent,
    CheckboxComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
 ModalComponent,
    Pagination,
    Radios,
    ButtonComponent,
    NavbarComponent,
    InputComponent,
    Login,
    Table,
    PageLayout,
    SelectComponent,
    CheckboxComponent,
    CardComponent
  ]
})
export class SharedModule { }
