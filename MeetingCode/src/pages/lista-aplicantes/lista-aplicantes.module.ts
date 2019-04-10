import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAplicantesPage } from './lista-aplicantes';

@NgModule({
  declarations: [
    ListaAplicantesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaAplicantesPage),
  ],
})
export class ListaAplicantesPageModule {}
