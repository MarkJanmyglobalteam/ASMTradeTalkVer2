import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StocksInfoPage } from '../stock-info/stock-info';


@Component({
  templateUrl: 'top-stocks.html'
})
export class TopStocksPage {

  constructor(public navCtrl: NavController) {}

  showStocks(){
  	this.navCtrl.push(StocksInfoPage, {});
  }

}
