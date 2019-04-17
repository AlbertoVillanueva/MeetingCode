import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Usuario } from '../../models/usuario.model';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;

	options: CameraOptions = {
		quality: 50,
		destinationType: this.camera.DestinationType.DATA_URL,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE,
		cameraDirection: 1,
		correctOrientation: true
	}
	clickedImagePath: String;

	constructor(fb: FormBuilder, private navCtrl: NavController, private auth: AuthService,	public dbFirebase: FirebaseDbProvider, private camera: Camera) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			nombre: ['', Validators.compose([Validators.required])],
			aptitudes: ['', Validators.compose([Validators.required])]
		});
		this.clickedImagePath = "default";
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

		this.auth.signUp(credentials, usuario, this.clickedImagePath).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
		);
	}

	clickImage() {
		this.camera.getPicture(this.options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64 (DATA_URL):
			this.clickedImagePath = imageData;
		}, (err) => {
			// Handle error
		});
	}
}