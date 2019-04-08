import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Proyecto } from '../../models/proyecto.model';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
  }

  guardaProyecto(proyecto:Proyecto) {
    if(proyecto.key=='') {
      proyecto.key=""+Date.now();
    }
    return this.afDB.database.ref('proyectos/'+proyecto.key).set(proyecto);
  }
  private proyectos=this.afDB.list<Proyecto>('proyectos');

  getProyectos() {
    return this.proyectos.valueChanges();
  }

  getProyecto(key:String) {
    /*En construcción */
    return this.afDB.database.ref('proyectos/'+key).once('value');   
  }
}