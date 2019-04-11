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
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { FormsModule }   from '@angular/forms';

import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { SignupPage } from '../pages/signup/signup';
import { AplicantePage } from '../pages/aplicante/aplicante';
import { AplicantePageModule } from '../pages/aplicante/aplicante.module';
import { ListaAplicantesPage } from '../pages/lista-aplicantes/lista-aplicantes';
import { ListaAplicantesPageModule } from '../pages/lista-aplicantes/lista-aplicantes.module';
import { ResultadosPageModule } from '../pages/resultados/resultados.module';
import { ResultadosPage } from '../pages/resultados/resultados';


/*https://medium.com/appseed-io/integrating-firebase-password-and-google-authentication-into-your-ionic-3-app-2421cee32db9*/


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
    AngularFireDatabaseModule,
    FormsModule,
    LoginPageModule,
    SignupPageModule,
    AplicantePageModule,
    ListaAplicantesPageModule,
    ResultadosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BusquedaPage,
    MisProyectosPage,
    AyudaPage,
    LoginPage,
    SignupPage,
    AplicantePage,
    ListaAplicantesPage,
    ResultadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider,
    AngularFireAuth,
    AuthService
  ]
})
export class AppModule {}