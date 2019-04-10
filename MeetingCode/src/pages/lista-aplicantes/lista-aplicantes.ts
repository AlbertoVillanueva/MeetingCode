import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Proyecto } from '../../models/proyecto.model';
import { Usuario } from '../../models/usuario.model';

/**
 * Generated class for the ListaAplicantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-aplicantes',
  templateUrl: 'lista-aplicantes.html',
})
export class ListaAplicantesPage {
  proyecto:Proyecto;
  usuarios:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider) {
    this.proyecto = new Proyecto();
    this.proyecto = navParams.get("proyecto");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaAplicantesPage');
    this.dbFirebase.getUsuarios().subscribe(listaUsuarios => { this.usuarios = listaUsuarios;});
  }
  irAplicante(item){
    this.navCtrl.push("AplicantePage", {item:item});
  }

}
