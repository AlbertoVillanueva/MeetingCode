import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proyecto } from '../../models/proyecto.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
}
