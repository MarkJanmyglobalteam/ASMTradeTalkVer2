import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'trending.html'
})

export class TrendingPage {
	trendingStocks:any[];
  constructor(public navCtrl: NavController) {
  	
  	this.trendingStocks=[
  		{
  			abv: 'ROKU',
			name: 'Roku',
			totalstocks: '46.01',
			range: '▼ 3.30 (7.73%)',
			color: '#F93324'
  		},
  		{
  			abv: 'INTC',
			name: 'Intel Corporation',
			totalstocks: '40.92',
			range: '▼ 0.01 (0.02%)'
  		},
  		{
  			abv: 'AMD',
			name: 'Advanced Micro Devices, Inc',
			totalstocks: '12.90',
			range: '▼ 1.35 (9.47%)'
  		}
  	]
  }

}
