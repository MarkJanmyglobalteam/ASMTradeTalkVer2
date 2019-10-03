import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import {LoginPage} from '../login/login';

/**
 * Generated class for the PasswordresetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  userData: firebase.database.Reference;
  fireAuth: firebase.auth.Auth;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.fireAuth = firebase.auth();
    this.userData = firebase.database().ref('/userData');
    
  }

  reset(email) {
    let alert = this.alertCtrl.create({
      buttons: ['Ok']
    });
    const result = this.fireAuth.sendPasswordResetEmail(email);
    if (result) {
      console.log("success");
     

    } 
      else {
        alert.setTitle('Failed');
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordresetPage');
  }

}
