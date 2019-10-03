import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'; 


@Component({
  selector:'notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

	displayNotifications:any[];

  constructor(public navCtrl: NavController) {
  	this.displayNotifications = [
  		{
  			notificationTitle: 'Watchlist',
  			notificationDesc: 'This this the description of watchlist notification This this the description of watchlist notification'
  		},
  		{
  			notificationTitle: 'James send a message to you',
  			notificationDesc: 'I feel confident'
  		}
  	];
  	console.log(this.displayNotifications);
  }

  showLogin(): void {
  this.navCtrl.push(LoginPage);
  }
}
