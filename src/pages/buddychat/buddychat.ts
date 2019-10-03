import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import firebase from 'firebase';
import { Content } from 'ionic-angular/navigation/nav-interfaces';

/**
 * Generated class for the BuddychatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buddychat',
  templateUrl: 'buddychat.html',
})
export class BuddychatPage {
  @ViewChild('content') content: Content;
  buddy: any;
  newmessage = '';
  allmessages = [];
  styling="float:right";
  photoURL;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public chatservice: ChatProvider,
    public events: Events, public zone: NgZone, public toastCtrl: ToastController) {
      this.buddy = this.chatservice.buddy;
      this.photoURL = firebase.auth().currentUser.photoURL;
      this.scrollto();
      this.events.subscribe('newmessage', () => {
        this.allmessages = [];
        this.zone.run(() => {
          this.allmessages = this.chatservice.buddymessages;
        })
      })
  }
  addmessage() {
    var toaster = this.toastCtrl.create({
      duration:2000,
      position: 'bottom'
  });

  if(this.newmessage == ""){
    toaster.setMessage('Input Message');
    toaster.present();
  }else{
    this.chatservice.addnewmessage(this.newmessage).then(() => {
      // this.content.scrollToBottom();
      this.newmessage = '';
    })
  }
    
  }

  ionViewDidEnter() {
    this.chatservice.getbuddymessages();
  }

  scrollto() {
    setTimeout(() => {
      // this.content.scrollToBottom();
    }, 1000);
  }

}
