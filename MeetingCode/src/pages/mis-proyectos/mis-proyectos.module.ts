import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisProyectosPage } from './mis-proyectos';

@NgModule({
  declarations: [
    MisProyectosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisProyectosPage),
  ],
})
export class MisProyectosPageModule {}
