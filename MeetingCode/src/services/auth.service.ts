import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

@Injectable()
export class AuthService {
    private user: firebase.User;
    
    constructor(public afAuth: AngularFireAuth, public dbFirebase: FirebaseDbProvider) {
        afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }

    signInWithEmail(credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
            credentials.password);
    }

    /**
     * Cuando se crea la cuenta, se asigna al user key la uid de la cuenta para identificarlo en la base de datos
     * en caso de que no se haya hecho foto, se pone una foto por defecto pero en caso de hacerse una foto, se toma 
     * una referencia de firebase storage, donde se va a guardar la foto.
     * 
     * Cuando se ha subido, se obtiene el DownloadURL y se asigna al atributo del usuario.
     * Por ultimo, se guarda el usuario en la base de datos.
     * 
     * @param credentials Email y contraseña
     * @param usuario Objeto del usuario para subirlo a firebase cuando esté registrado
     * @param foto Foto en base64 que el usuario ha hecho en registro
     */
    signUp(credentials, usuario, foto) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(
            () => {usuario.key =  this.afAuth.auth.currentUser.uid; 
                if(foto == "default"){
                    usuario.foto = "https://www.uic.mx/posgrados/files/2018/05/default-user.png";
                    this.dbFirebase.guardaUsuario(usuario);
                } else {
                    let reference = firebase.storage().ref(usuario.key);
                    reference.putString(foto, 'base64').then(
                    () => reference.getDownloadURL().then((url) => {
                        usuario.foto = url;}).then(() => this.dbFirebase.guardaUsuario(usuario)))
                }
                
            }
        );
    }
    get authenticated(): boolean {
        return this.user !== null;
    
    }
    getEmail() {
        return this.user && this.user.email;
    }

    getUid() {
        return this.user && this.user.uid;
    }

    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
    }
}