import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {RequestProvider} from '../../providers/request/request';
import {Connreq} from '../../models/conrequest';
import firebase from 'firebase';

/**
 * Generated class for the UserlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userlist',
  templateUrl: 'userlist.html',
})
export class UserlistPage {
  newrequest =  {} as Connreq;
  temporary = [];
filteredusers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider, public alert:AlertController, public requestservice: RequestProvider) {

  }
  ionViewDidLoad() {
    this.authservice.getallusers().then((res:any )=> {
      this.filteredusers = res;
      this.temporary = res;
    })
    
  }


  searchuser(searchbar){
    this.filteredusers = this.temporary;
    var q = searchbar.target.value;
    if(q.trim() == ''){
      return;
    }
    this.filteredusers = this.filteredusers.filter((v) => {
      if (v.firstname.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

  sendreq(recipient, email) {
    
    this.newrequest.sender = firebase.auth().currentUser.uid;
    this.newrequest.email = firebase.auth().currentUser.email;
    this.newrequest.recipient = recipient;
    if (this.newrequest.sender === this.newrequest.recipient)
      alert('You are your friend always');
    else {
      let successalert = this.alert.create({
        title: 'Request sent',
        subTitle: 'Your request was sent to '+ email,
        buttons: ['ok']
      });
    
      this.requestservice.sendrequest(this.newrequest).then((res: any) => {
        if (res.success) {
          successalert.present();
          let sentuser = this.filteredusers.indexOf(recipient);
          this.filteredusers.splice(sentuser, 1);
        }
      }).catch((err) => {
        alert(err);
      })
    }
    console.log(recipient)
  }
}


