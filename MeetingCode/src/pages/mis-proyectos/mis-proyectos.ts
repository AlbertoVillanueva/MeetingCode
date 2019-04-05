import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Proyecto } from '../../models/proyecto.model';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  private texto = "Ahora, un equipo de investigadores de diversas instituciones, entre ellas las universidades de Nueva York y Ottawa (Canadá), descubrió que la exposición al ozono durante largo plazo tiene consecuencias negativas para la salud del ser humano.";


  proyectosGames: Proyecto []= [{"nombre":"Pokémon Yellow","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto},
  {"nombre":"Pokémon Red","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto},
  {"nombre":"Pokémon Blue","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto}];

  proyectosML: Proyecto []= [{"nombre":"Pokémon Yellow","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto},
  {"nombre":"Pokémon Red","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto},
  {"nombre":"Pokémon Blue","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto}];

  irProyecto() {
    this.navCtrl.push("ProyectoPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisProyectosPage');
  }

}
