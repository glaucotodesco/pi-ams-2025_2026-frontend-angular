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
import { SectionTitleComponent } from './components/section-title/section-title';
import { HeaderComponent } from './components/header/header';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectEntityComponent } from './components/select-entity/select-entity';

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
    SectionTitleComponent,
    HeaderComponent,
    SelectEntityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
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
    CardComponent,
    SectionTitleComponent,
    HeaderComponent,
    SelectEntityComponent,
  ],
})
export class SharedModule {}
