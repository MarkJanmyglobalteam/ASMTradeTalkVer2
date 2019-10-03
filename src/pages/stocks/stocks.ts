import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TrendingPage } from '../stocks/trending/trending';
import { TopMoversPage } from '../stocks/top-movers/top-movers';


@Component({
  template: '<ion-content padding><ion-list class="backg"><ion-tabs class="backg tabs-icon-top tabs-positive" tabsPlacement="top"><ion-tab [root]="FollowTab" tabTitle="Follow" tabIcon="ios-redo-outline"></ion-tab></ion-tabs></ion-list></ion-content>',
  // template: '<ion-content padding><ion-list class="backg"><ion-tabs class="backg tabs-icon-top tabs-positive" tabsPlacement="top"><ion-tab [root]="WatchListTab" tabTitle="Watchlist" tabIcon="ios-paper-outline"></ion-tab><ion-tab [root]="TrendingTab" tabTitle="Trending" tabIcon="ios-trending-up-outline"></ion-tab><ion-tab [root]="FollowTab" tabTitle="Follow" tabIcon="ios-redo-outline"></ion-tab><ion-tab [root]="TopTab" tabTitle="Top Movers" tabIcon="ios-arrow-up"></ion-tab></ion-tabs></ion-list></ion-content>',
})
export class StocksPage {

  // TrendingTab = TrendingPage;

  TopTab= TopMoversPage;
  constructor(public navCtrl: NavController) {}
} 