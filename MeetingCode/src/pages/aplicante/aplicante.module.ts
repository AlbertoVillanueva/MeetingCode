import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AplicantePage } from './aplicante';

@NgModule({
  declarations: [
    AplicantePage,
  ],
  imports: [
    IonicPageModule.forChild(AplicantePage),
  ],
})
export class AplicantePageModule {}
