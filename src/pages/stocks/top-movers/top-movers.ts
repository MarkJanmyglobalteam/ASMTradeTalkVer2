import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TopStocksPage } from '../top-stocks/top-stocks';
import { BottomStocksPage } from '../bottom-stocks/bottom-stocks';

@Component({
	selector: 'topmovers',
  templateUrl: 'top-movers.html'
})
export class TopMoversPage {
TopStocksTab = TopStocksPage;
BottomStocksTab = BottomStocksPage;

  constructor(public navCtrl: NavController) {

  }
}
