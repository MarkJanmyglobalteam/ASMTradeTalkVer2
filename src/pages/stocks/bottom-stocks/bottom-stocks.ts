import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'bottom-stocks.html'
})
export class BottomStocksPage {
	bottomStocks:any[];
  constructor(public navCtrl: NavController) {
  	this.bottomStocks = [
  		{
  			abv: 'INTC',
			name: 'Intel Corporation',
			totalstocks: '40.92',
			range: '▼ -0.01 (0.02%)'
  		},
  		{
  			abv: 'AMD',
  			name: 'Advanced Micro Devices, Inc.',
  			totalstocks: '12.90',
  			range: '▼ 1.35 (9.47%)'
  		}
  	];
  }

}
