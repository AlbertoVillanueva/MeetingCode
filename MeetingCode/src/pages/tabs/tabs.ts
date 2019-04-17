import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BusquedaPage } from '../../pages/busqueda/busqueda';
import { MisProyectosPage } from '../../pages/mis-proyectos/mis-proyectos';
import { AyudaPage } from '../../pages/ayuda/ayuda';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BusquedaPage;
  tab3Root = MisProyectosPage;
  tab4Root = AyudaPage;

  constructor() {

  }

  /**
   * En caso de que se cambie de tab, se vuelve en esa tab a la inicial, dejando la pila vacia.
   */
  tabChanged($ev){
    if($ev.tabTitle === "Inicio"){
      $ev.setRoot(HomePage);
    } else if($ev.tabTitle === "Mis proyectos") {
      $ev.setRoot(MisProyectosPage);
    } else if($ev.tabTitle === "Ayuda") {
      $ev.setRoot(AyudaPage);
    } else if ($ev.tabTitle === "Buscar"){
      $ev.setRoot(BusquedaPage);
    }
  }
}
