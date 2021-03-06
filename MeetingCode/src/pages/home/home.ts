import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  proyectos: any;

  /**
   * Se obtiene la lista de proyectos mediante un subscribe, cualquier cambio afecta a la página de inicio
   * y se ven los cambios en tiempo real
   */
  constructor(public navCtrl: NavController, public dbFirebase: FirebaseDbProvider, private auth: AuthService) {
    this.dbFirebase.getProyectos().subscribe(listaProyectos => { this.proyectos = listaProyectos; });
  }

  irProyecto(key) {
    this.navCtrl.push("ProyectoPage", {
      key: key
    });
  }

  goLogin() {
    this.auth.signOut();
    this.navCtrl.push("LoginPage");
  }

  logout() {
    this.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }
}