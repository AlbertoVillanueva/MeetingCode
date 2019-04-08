import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  nombre: String;
  foto: String;
  descripcion: String;
  creador:String;
  tipo:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider) {
    let key;
    key = navParams.get('key');
    dbFirebase.getProyecto(key).then(function(snapshot) {
      /*EN CONSTRUCCION*/ 
      console.log("proyecto: " + snapshot.val().key);
      /*
      this.nombre = snapshot.val().nombre;
      this.foto = snapshot.val().foto;
      this.descripcion = snapshot.val().descripcion;
      this.creador = snapshot.val().creador;
      this.tipo = snapshot.val().tipo;*/
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectoPage');
  }

}
