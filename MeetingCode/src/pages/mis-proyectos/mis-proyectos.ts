import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the MisProyectosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-proyectos',
  templateUrl: 'mis-proyectos.html',
})
export class MisProyectosPage {
  proyectos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider, private auth: AuthService) {
  }

  irProyecto(key) {
    this.navCtrl.push("ProyectoPage", {
      key: key
    });
  }

  ionViewWillEnter() {
    this.dbFirebase.getProyectos().subscribe(listaProyectos => { this.proyectos = listaProyectos });
  }

  goLogin() {
    this.auth.signOut();
    this.navCtrl.push("LoginPage");
  }

  logout() {
    this.auth.signOut();
  }
}
