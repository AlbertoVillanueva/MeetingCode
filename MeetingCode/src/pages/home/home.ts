import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proyecto } from '../../models/proyecto.model';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  proyectos:any;
  
  constructor(public navCtrl: NavController, public dbFirebase: FirebaseDbProvider, private auth: AuthService) {

  }

  ionViewWillEnter() {
    this.dbFirebase.getProyectos().subscribe(listaProyectos => { this.proyectos = listaProyectos });
  }

  private texto = "Ahora, un equipo de investigadores de diversas instituciones, entre ellas las universidades de Nueva York y Ottawa (Canadá), descubrio un problema en la vida cotidiana de muchas personas en sus respectivas ciudades por lo que quieren desarrollar un sistema que a través de clasificación permita la creación de robots que faciliten la vida de esta personas en función de sus características, ya que el robot se adaptará a la persona.";

  
  proyectosPreCarga: Proyecto []= [{"nombre":"Pacman","foto":"https://i.imgur.com/6QZ8sqr.png","descripcion":"Somos un equipo de investigación que está buscando gente para llevar a cabo un proyecto relacionado con pacman. En un principio se buscaque por medio del aprendizaje automático el pacman sea capaz de resolver la situación del juego. Para ello se necesita gente con ambición,con conocimiento en machine learning, con ganas de aprender y que sepa trabajar en equipo, ya que tan solo no buscamos a una persona sino a varias que puedan llegar a colaborar.", "creador":"Paco", "tipo":"ML", "creadorID":"creador@gmail.com"},
  {"nombre":"Pacman Refuerzo","foto":"https://i.imgur.com/YZ7mDQ5.png","descripcion":"Un equipo de desarrolladores que necesita a una persona para completar su equipo con el objetivo de llevar a cabo un proyecto de aprendizaje por refuerzo para el juego del pacman. Se busca una persona con conocimientos en machine learnig, que sepa varios lenguajes de programación (como mínimo python y C) y que sepa trabajar en equipo y este dispuesto a trabajar lejos de casa ya que se tendría que desplazar a otro pais.", "creador":"Paco", "tipo":"ML", "creadorID":"creador@gmail.com"},
  {"nombre":"Clasificacion sencilla","foto":"https://i.imgur.com/L3ckCwK.png","descripcion":this.texto, "creador":"Paco", "tipo":"ML", "creadorID":"creador@gmail.com"},
  {"nombre":"Pokémon Yellow","foto":"https://i.imgur.com/hUQVpl2.jpg","descripcion":"Con la intención de aumentar la experiencia de los fanaticos de pokemon tenemos en mente un proyecto para llevar a cabo un hack-rom de pokemon amarillo con los pokemon originales y que peromita explorar otras regiones en el mismo juego, que peromita a las personas horas de diversion. Se buscan personas que con ambición, conocimientos de programación y varios lenguajes como C o similares que permitan el desarrollo del juego.", "creador":"Paco", "tipo":"Games", "creadorID":"creador2@gmail.com"},
  {"nombre":"Pokémon Red","foto":"https://i.imgur.com/9zQ7cmn.jpg","descripcion":"Con la intención de aumentar la experiencia de los fanaticos de pokemon tenemos en mente un proyecto para llevar a cabo un hack-rom de pokemon rojo con los pokemon originales y que peromita explorar otras regiones en el mismo juego, que peromita a las personas horas de diversion. Se buscan personas que con ambición, conocimientos de programación y varios lenguajes como C o similares que permitan el desarrollo del juego.", "creador":"Paco", "tipo":"Games", "creadorID":"creador2@gmail.com"},
  {"nombre":"Pokémon Blue","foto":"https://i.imgur.com/qVTRWIQ.jpg","descripcion":"Con la intención de aumentar la experiencia de los fanaticos de pokemon tenemos en mente un proyecto para llevar a cabo un hack-rom de pokemon azul con los pokemon originales y que peromita explorar otras regiones en el mismo juego, que peromita a las personas horas de diversion. Se buscan personas que con ambición, conocimientos de programación y varios lenguajes como C o similares que permitan el desarrollo del juego.", "creador":"Paco", "tipo":"Games", "creadorID":"creador2@gmail.com"}];

  irProyecto(key) {
    this.navCtrl.push("ProyectoPage", {
      key: key
    });
  }

  onAddProject() {
    let proyecto:Proyecto=new Proyecto();
    this.dbFirebase.borrarProyectos();
    for(let value of this.proyectosPreCarga) {
      
      proyecto.key = ""+ Date.now();
      proyecto.nombre = value.nombre;
      proyecto.foto = value.foto;
      proyecto.descripcion = value.descripcion;
      proyecto.tipo = value.tipo;
      proyecto.creador = value.creador;
      proyecto.creadorID = value.creadorID;
      proyecto.aplicantes = [""];
      proyecto.colaboradores = [""];
      this.dbFirebase.guardaProyecto(proyecto).then(res=>{})
    }
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