import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stock } from '../../models/stock';
import {Watchlist} from '../../models/watchlist';
import firebase from 'firebase';
import { AlphaVantageProvider } from '../../providers/alpha-vantage/alpha-vantage';
import { StockProvider } from '../../providers/stock/stock';
import { Http } from '@angular/http';
import { StocksInfoPage } from '../stocks/stock-info/stock-info';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the StocklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stocklist',
  templateUrl: 'stocklist.html',
})
export class StocklistPage {
  stockWatchlist = firebase.database().ref('/watchlists');
  watchlistModel =  {} as Watchlist;
  stocks: Stock[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;


  symbols = [];

  $completed: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public stockProvider: AlphaVantageProvider, public http: Http) {
    this.loadSymbols();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StocklistPage');
  }

  loadSymbols() {
    this.http.get('assets/json/companyList.json')
      .map(res => res.json())
        .subscribe(data => {
          this.symbols = data;
          this.loadStocks();
        });
  }


  loadStock()
{
  if(this.$completed) return;
  
      let offset = this.itemsPerPage * (this.currentPage - 1);
      let limit = offset + this.itemsPerPage;
          limit = (this.symbols.length < limit) ? this.symbols.length : limit;
  
      for (let i = offset; i < limit; i++) {
        let stock = new Stock(this.stockProvider);
        stock.setName(this.symbols[i].name);
        stock.setSymbol(this.symbols[i].symbol);
        stock.fetch();
        this.stocks.push(stock);
       
        if(i === (this.symbols.length - 1)) this.$completed = true;
      }
  
      this.currentPage += 1;

}
  loadStocks() {
  this.loadStock();
  }

  watchlist (stocks: string, user: string){
    
      user = firebase.auth().currentUser.uid;
      stocks = stocks
      this.stockWatchlist.child(user).push().set({
      stocks: stocks
      })

  }

 showStockPage(){
   this.navCtrl.push(StocksInfoPage);
 }

}
