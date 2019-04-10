import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario.model';

/**
 * Generated class for the AplicantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aplicante',
  templateUrl: 'aplicante.html',
})
export class AplicantePage {
  usuario:Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = new Usuario();
    this.usuario = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AplicantePage');
  }

}
