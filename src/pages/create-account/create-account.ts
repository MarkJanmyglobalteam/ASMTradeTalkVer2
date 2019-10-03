import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../../pages/login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../models/user";
import firebase from 'firebase';

@Component({
	selector: 'create-acc',
	templateUrl: 'create-account.html'
})


export class CreateAccount {
  userData: firebase.database.Reference;
  fireAuth: firebase.auth.Auth;
	user = {} as User;
	responseData: any;
	
	constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public loadCtrl : LoadingController, public toastCtrl: ToastController) {
    this.fireAuth = firebase.auth();
    this.userData = firebase.database().ref('/userData');
	}
	showTabs() {
		this.navCtrl.push(TabsPage, {});
  }
 
	async signup( user: User){
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
				try{
					const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then((newUser) => {
				this.userData.child(newUser.uid).set({email:user.email});
				
				toaster.setMessage('Successfully Registered');
				toaster.present();
				this
				.navCtrl
				.push(LoginPage)
			})
				}
				catch (e) {
					console.error(e);
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
			this.userData.child(res.user.uid).set({uid:res.user.uid, email:res.user.email});
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
			var token = res.credential.accessToken;
			this.userData.child(res.user.uid).set({uid:res.user.uid, email:res.user.email});
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
			this.userData.child(res.user.uid).set({uid:res.user.uid, email:res.user.email, "photoUrl": " https://firebasestorage.googleapis.com/v0/b/asx-tradetalk.appspot.com/o/-L2h3eBxJSerdOF1bYAk?alt=media&token=ad636b70-6368-48bd-b4ac-d01ca0e276b0"});
			this.navCtrl.setRoot(TabsPage);
			toaster.setMessage('Loggedin');
			toaster.present();
			});
		})
	}
  
	login(){
		this
		.navCtrl
		.push(LoginPage)
	}
}

