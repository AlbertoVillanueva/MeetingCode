import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Usuario } from '../../models/usuario.model';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;
	usuario:Usuario;

	constructor(
		fb: FormBuilder,
    private navCtrl: NavController,
		private auth: AuthService,
		public dbFirebase: FirebaseDbProvider
	) {
		this.usuario = new Usuario();
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			nombre: [''],
			aptitudes: ['']
		});
  }

	registrarUsuario() {
		let data = this.form.value;
		this.usuario.nombre = data.nombre;
		this.usuario.aptitudes = data.aptitudes;
		this.usuario.email = data.email;
		this.signup(this.usuario);
	}
  signup(usuario:Usuario) {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
	
		this.auth.signUp(credentials).then(
			() => {this.navCtrl.setRoot(HomePage); this.dbFirebase.guardaUsuario(usuario);},
			error => this.signupError = error.message
		);
}
}