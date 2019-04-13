import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Proyecto } from '../../models/proyecto.model';

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
  proyecto: Proyecto;
  usuarios: any;
  private observable: any;

  /*Parametros de pop*/
  user: String;
  operation: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider, private alertCtrl: AlertController) {
    this.dbFirebase.getUsuarios().subscribe(listaUsuarios => { this.usuarios = listaUsuarios; });
    let key = navParams.get('key');
    console.log(navParams.data);
    this.observable = dbFirebase.afDB.object('proyectos/' + key).valueChanges();
    console.log(this.observable);
    this.observable.subscribe(x => { this.proyecto = x; console.log(this.proyecto); });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaAplicantesPage');
  }

  public ionViewWillEnter() {
    this.user = this.navParams.get('user') || null;

    if (this.user != null) {
      this.seleccionarAplicante(this.user);
    }
  }
  irAplicante(item) {
    this.navCtrl.push("AplicantePage", { item: item });
  }

  seleccionarAplicante(user) {
    let indice = this.proyecto.aplicantes.indexOf(user);
    this.proyecto.aplicantes.splice(indice, 1);
    this.proyecto.colaboradores.push(user);
    console.log(this.proyecto);
    this.dbFirebase.actualizaProyecto(this.proyecto);
  }

  desaplicar(key) {
    let alert = this.alertCtrl.create({
      title: 'Descartar aplicante',
      message: '¿Seguro que quieres descartar del proyecto a este aplicante?',
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
            let indice = this.proyecto.aplicantes.indexOf(key);
            if (indice != -1) {
              this.proyecto.aplicantes.splice(indice, 1);
            }

            this.dbFirebase.actualizaProyecto(this.proyecto);
          }
        }
      ]
    });
    return alert.present();
  }

}
