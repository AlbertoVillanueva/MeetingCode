import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
  proyectos:any;
  query:String;
  tipo:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider) {
    this.query = this.navParams.get('query');
    this.tipo = this.navParams.get('tipo');
    this.dbFirebase.getProyectos().subscribe(listaProyectos => { this.proyectos = listaProyectos; });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }

  irProyecto(key) {
    this.navCtrl.push("ProyectoPage", {
      key: key
    });
  }

}