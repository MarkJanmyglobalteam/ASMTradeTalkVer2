import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import {UserlistPage} from '../userlist/userlist';
import { User } from '../../models/user';
import firebase from 'firebase';
import {RequestProvider} from '../../providers/request/request';
import {Events} from 'ionic-angular';
import {ChatProvider} from '../../providers/chat/chat';
@Component({
  selector: 'messages',
  templateUrl: 'messages.html'
})
export class MessagePage {

  myrequests;
    myfriends;

 
  constructor(public navCtrl: NavController, public events:Events,public requestservice:RequestProvider,public alert:AlertController, public chatservice:ChatProvider  ) {
	
  }
  
  

  ionViewWillEnter() {
    this.requestservice.getmyrequests();
    this.requestservice.getmyfriends();
    this.events.subscribe('gotrequests', () => {
      this.myrequests = [];
      this.myrequests = this.requestservice.userdetails;
    })
    this.events.subscribe('friends', () => {
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends; 
    })
  }
 
  ionViewDidLeave() {
    this.events.unsubscribe('gotrequests');
  }

  openConversation(){
  	this.navCtrl.push(ConversationPage);
  }


  addbuddy(){
this.navCtrl.push(UserlistPage);
  }



  accept(item) {
    this.requestservice.acceptrequest(item).then(() => {
      let newalert = this.alert.create({
        title: 'Friend added',
        subTitle: 'Tap on the friend to chat with him',
        buttons: ['Okay']
      });
      newalert.present();
    })
  }
  
  ignore(item) {
    this.requestservice.deleterequest(item).then(() => {
       alert('Request ignored');
    }).catch((err) => {
      alert(err);
    })
  }



buddychat(buddy) {
  this.chatservice.initializebuddy(buddy);
  this.navCtrl.push('BuddychatPage');
}




}
