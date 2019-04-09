import { Component, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { AuthService } from '../../services/auth.service';
import { Proyecto } from '../../models/proyecto.model';


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
  proyecto:Proyecto;

  nombre: String;
  foto: String;
  descripcion: String;
  creador:String;
  tipo:String;
  aplicantes: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider, private auth: AuthService) {
    let key;
    key = navParams.get('key');
    dbFirebase.getProyecto(key).then(x=> {
      console.log("proyecto: " + x.val().key);
      this.proyecto = x.val();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectoPage');
  }

  addAplicante() {
    if(this.auth.authenticated) {
      console.log(this.auth.getEmail());
      if(this.proyecto.aplicantes.indexOf(this.auth.getEmail()) == -1) {
        if(this.proyecto.aplicantes[0] == "")
          this.proyecto.aplicantes[0]= this.auth.getEmail();
        else
          this.proyecto.aplicantes.push(this.auth.getEmail());

        this.dbFirebase.actualizaProyecto(this.proyecto);
      } else {
        console.log("Error por pantalla de que ya has aplicado")
      }     
    } else {
      /*EN CONSTRUCCION*/ 
      console.log("No autenticado");
    }
    
  }

}
