import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { keyframes } from '@angular/core/src/animation/dsl';
import { Proyecto } from '../../models/proyecto.model';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';


/**
 * Generated class for the ProyectoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proyecto',
  templateUrl: 'proyecto.html',
})
export class ProyectoPage {
  proyecto: Proyecto;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider) {
    let key;
    key = navParams.get('key');
    /*En construccion*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectoPage');
  }

}
