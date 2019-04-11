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

	constructor(
		fb: FormBuilder,
		private navCtrl: NavController,
		private auth: AuthService,
		public dbFirebase: FirebaseDbProvider
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			nombre: ['', Validators.compose([Validators.required])],
			aptitudes: ['', Validators.compose([Validators.required])]
		});
	}

	signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		let usuario: Usuario;
		usuario = new Usuario();

		usuario.nombre = data.nombre;
		usuario.aptitudes = data.aptitudes;

		this.auth.signUp(credentials, usuario).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
		);
	}
}