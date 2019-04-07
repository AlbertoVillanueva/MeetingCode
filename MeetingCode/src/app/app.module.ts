import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { MisProyectosPage } from '../pages/mis-proyectos/mis-proyectos';
import { AyudaPage } from '../pages/ayuda/ayuda';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

export const fireBaseConfig={
  apiKey: "AIzaSyBzjFJQ1fDmLfoyepXbzqcje-94c_dT5QU",
  authDomain: "meetingcode-30e56.firebaseapp.com",
  databaseURL: "https://meetingcode-30e56.firebaseio.com",
  projectId: "meetingcode-30e56",
  storageBucket: "meetingcode-30e56.appspot.com",
  messagingSenderId: "1046821128147"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BusquedaPage,
    MisProyectosPage,
    AyudaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BusquedaPage,
    MisProyectosPage,
    AyudaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider,
    FirebaseDbProvider,
    FirebaseDbProvider
  ]
})
export class AppModule {}