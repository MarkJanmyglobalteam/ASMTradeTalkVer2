import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CreateAccount } from '../create-account/create-account';

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FIREBASE_CONFIG} from "../../app/app.firebase.config";

import { User } from "../../models/user";
//import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook'
import { TwitterConnect } from '@ionic-native/twitter-connect';
import firebase from 'firebase';

@Component({
	selector: 'login',
	templateUrl: 'login.html'
})


export class LoginPage {
	googlePlus: any;



	responseData : any;
	user = {} as User;

	userData: firebase.database.Reference;
	fireAuth: firebase.auth.Auth;
	

	constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public loadingCtrl: LoadingController, public toastCtrl: ToastController ) {
		this.fireAuth = firebase.auth();
		this.userData = firebase.database().ref('/userData');
		
	}

	createAccount(){
		this.navCtrl.push(CreateAccount, {});
	}
	showTabs() {
		this.navCtrl.setRoot(TabsPage, {});
	}

	async login(user: User) {
		var toaster = this.toastCtrl.create({
			duration:2000,
			position: 'bottom'
		});

		if(this.user.email ==null &&  this.user.password ==null){
			toaster.setMessage('Email and Password is Required');
			toaster.present();
		}else if (this.user.email ==null){
			toaster.setMessage('Email is Required');
			toaster.present();
		}else if (this.user.password ==null){
			toaster.setMessage('Password is Required');
			toaster.present();
		}else{
			try {
				const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
				if (result) {
					this.navCtrl.setRoot(TabsPage);
					console.log(user.email);
					toaster.setMessage('Successfully Logged In');
					toaster.present();
				} 
			}
			catch (e) {
				console.error(e);
				toaster.setMessage('Email or Password Incorrect');
				toaster.present();
			}
		}
	}


	
	googleLogin(){
		var toaster = this.toastCtrl.create({
			duration:2000,
			position: 'bottom'
		});
		this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider).then(() => {
			this.afAuth.auth.getRedirectResult().then( res => {
			//this.userData.child(res.user.uid).set({uid:res.user.uid, email:res.user.email});
			this.navCtrl.setRoot(TabsPage);
			toaster.setMessage('Loggedin');
			toaster.present();
			});
		})
	}

	facebookLogin(){
		var toaster = this.toastCtrl.create({
			duration:2000,
			position: 'bottom'
		});
		this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider).then(() => {
			this.afAuth.auth.getRedirectResult().then( res => {
			//this.userData.child(res.user.uid).set({uid:res.user.uid, email:res.user.email});
			this.navCtrl.setRoot(TabsPage);
			toaster.setMessage('Loggedin');
			toaster.present();
			});
		})
	}
		
	twitterLogin(){
		var toaster = this.toastCtrl.create({
			duration:2000,
			position: 'bottom'
		});
		this.afAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider).then(() => {
			this.afAuth.auth.getRedirectResult().then( res => {
			//this.userData.child(res.user.uid).set({uid:res.user.uid, email:res.user.email});
			this.navCtrl.setRoot(TabsPage);
			toaster.setMessage('Loggedin');
			toaster.present();
			});
		})
	}

}
