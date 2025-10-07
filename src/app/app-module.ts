import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { ModalGenericComponent } from './modules/shared/components/modal/modal';
=======
import { SharedModule } from "./modules/shared/shared-module";
>>>>>>> dev

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
<<<<<<< HEAD
    ModalGenericComponent
  ],
=======
    SharedModule // módulo para exibir os componentes compartilhados
],
>>>>>>> dev
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
