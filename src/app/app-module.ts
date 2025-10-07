import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "./modules/shared/shared-module";
import { SelectComponent } from "./modules/shared/components/select/select.component";

@NgModule({
  declarations: [
    App,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule // módulo para exibir os componentes compartilhados
  ],
  exports: [
    SelectComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
