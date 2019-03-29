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
}
