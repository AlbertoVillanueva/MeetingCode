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

  /**
   * Parametros para que nos devuelvan el user que hay que seleccionar.
   * Hacerlo así evitar tener que tener en la página del aplicante los subscribe y la lista de proyectos y usuarios.
   */
  user: String;
  operation: String;
  /**
   * Nos subscribimos a la lista de usuarios, así aparecen cambios en los usuarios en tiempo real
   * Tambien subscribimos a un objeto proyecto, concretamente solo al de la lista de aplicantes involucrada
   */
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

  /**
   * Cuando entremos en la pagina, si hemos recibido parametros, significa que hemos seleccionado un aplicante, 
   * por lo que llamamos a la funcion
   */
  public ionViewWillEnter() {
    this.user = this.navParams.get('user') || null;

    if (this.user != null) {
      this.seleccionarAplicante(this.user);
    }
  }
  irAplicante(item) {
    this.navCtrl.push("AplicantePage", { item: item });
  }

  /**
   * Al seleccionar un aplicante, lo borramos de la lista de aplicantes y se añade a la lista
   * de colaboradores, despues se llama a una funcion del servicio para actualizar el proyecto.
   */
  seleccionarAplicante(user) {
    let indice = this.proyecto.aplicantes.indexOf(user);
    this.proyecto.aplicantes.splice(indice, 1);
    this.proyecto.colaboradores.push(user);
    console.log(this.proyecto);
    this.dbFirebase.actualizaProyecto(this.proyecto);
  }

  /**
   * En caso de pulsar en borrar aplicante, utilizamos esta funcion. Tambien con AlertBox
   */
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
