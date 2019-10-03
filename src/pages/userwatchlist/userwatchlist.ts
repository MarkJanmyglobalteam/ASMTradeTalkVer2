import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Events} from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the UserwatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userwatchlist',
  templateUrl: 'userwatchlist.html',
})
export class UserwatchlistPage {
  stocks;

  firebaseWatchlist = firebase.database().ref('/watchlists')
  mystocks: any[];

  constructor(public events:Events, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserwatchlistPage');
  }


  watchlist(){

  let allmystocks;
  var mystocks = [];


    this.firebaseWatchlist.child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
    allmystocks = snapshot.val();
    mystocks = [];
    for (var i in allmystocks){
      mystocks.push(allmystocks[i].sender);
    }
    console.log(allmystocks);
  })


  }




  ioncViewWillEnter(){

    this.events.subscribe('watchlists', () => {
   this.stocks = [];
   this.stocks = this.watchlist;


    })
    

  }

}
