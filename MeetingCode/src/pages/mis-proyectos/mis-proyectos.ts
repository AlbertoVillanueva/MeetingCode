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


  proyectosGames: Proyecto []= [{"nombre":"Pacman","foto":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Pac_Man.svg/1200px-Pac_Man.svg.png","descripcion":this.texto, "creador":"Paco", "tipo":"ML"},
  {"nombre":"Pacman Refuerzo","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"ML"},
  {"nombre":"Clasificacion sencilla","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"ML"}];

  proyectosML: Proyecto []= [{"nombre":"Pokémon Yellow","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"Games"},
  {"nombre":"Pokémon Red","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"Games"},
  {"nombre":"Pokémon Blue","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"Games"}];

  irProyecto() {
    this.navCtrl.push("ProyectoPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisProyectosPage');
  }

}
