import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario.model';
import { AlertController } from 'ionic-angular';

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
  usuario: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.usuario = new Usuario();
    this.usuario = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AplicantePage');
  }
  /** 
   * Funcion que se ejecuta cuando se pulsa en seleccionar un aplicante
   * Se crea mediante un Alert Box para prevenir errores.
   * En caso de pulsar en sí, se pasa por parametro a la página anterior 
   * el UID del user a seleccionar
   */
  seleccionar() {
    let alert = this.alertCtrl.create({
      title: 'Seleccionar',
      message: '¿Quieres añadir al proyecto a este aplicante?',
      buttons: [
        {
          text: 'No',
          role: 'No',
          handler: () => {
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.navCtrl.getPrevious().data.user = this.usuario.key;
            this.navCtrl.pop();
          }
        }
      ]
    });
    return alert.present();
  }

}
