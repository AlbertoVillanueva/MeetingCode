import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proyecto } from '../../models/proyecto.model';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  proyectos:any;
  
  constructor(public navCtrl: NavController, public dbFirebase: FirebaseDbProvider) {

  }

  ionViewWillEnter() {
    this.dbFirebase.getProyectos().subscribe(listaProyectos => { this.proyectos = listaProyectos });
  }

  private texto = "Ahora, un equipo de investigadores de diversas instituciones, entre ellas las universidades de Nueva York y Ottawa (Canadá), descubrió que la exposición al ozono durante largo plazo tiene consecuencias negativas para la salud del ser humano.";

  
  proyectosML: Proyecto []= [{"nombre":"Pacman","foto":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Pac_Man.svg/1200px-Pac_Man.svg.png","descripcion":this.texto, "creador":"Paco", "tipo":"ML"},
  {"nombre":"Pacman Refuerzo","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"ML"},
  {"nombre":"Clasificacion sencilla","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"ML"}];

  proyectosGames: Proyecto []= [{"nombre":"Pokémon Yellow","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"Games"},
  {"nombre":"Pokémon Red","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"Games"},
  {"nombre":"Pokémon Blue","foto":"../../assets/imgs/prueba.jpg","descripcion":this.texto, "creador":"Paco", "tipo":"Games"}];

  irProyecto(key) {
    this.navCtrl.push("ProyectoPage", {
      key: key
    });
  }

  onAddProject() {
    let proyecto:Proyecto=new Proyecto();
    for(let value of this.proyectosML) {
      
      proyecto.key = ""+ Date.now();
      proyecto.nombre = value.nombre;
      proyecto.foto = value.foto;
      proyecto.descripcion = value.descripcion;
      proyecto.tipo = value.tipo;
      this.dbFirebase.guardaProyecto(proyecto).then(res=>{})
    }
    for(let value of this.proyectosGames) {
      
      proyecto.key = ""+ Date.now();
      proyecto.nombre = value.nombre;
      proyecto.foto = value.foto;
      proyecto.descripcion = value.descripcion;
      proyecto.tipo = value.tipo;
      this.dbFirebase.guardaProyecto(proyecto).then(res=>{})
    }
  }
}