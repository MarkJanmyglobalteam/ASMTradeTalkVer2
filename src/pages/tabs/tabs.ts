import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { ChatPage } from '../chat/chat';
import { NotificationPage } from '../notification/notification';
import { MessagePage } from '../messages/messages';
import { StocksPage } from '../stocks/stocks';
import { UserProfilePage } from '../user-profile/user-profile';
import { StocklistPage } from '../stocklist/stocklist';
import {UserwatchlistPage} from '../userwatchlist/userwatchlist';
import { UserlistPage } from '../userlist/userlist';


@Component({
  template: 
  '<ion-tabs style="background: #FFF"> <ion-tab tabIcon="ios-stats-outline" tabTitle="Stocks" [root]="StockListTab">  </ion-tab><ion-tab [root]="UserWatchlistTab" tabTitle="Watchlist" tabIcon="ios-notifications-outline"></ion-tab><ion-tab [root]="Messages" tabTitle="Messages" tabIcon="ios-chatboxes-outline"></ion-tab></ion-tabs>'
  // template: '<ion-tabs style="background: #FFF"><ion-tab tabIcon="ios-stats-outline" tabTitle="Stocks" [root]="StocksTab"  ></ion-tab><ion-tab [root]="ChatTab" tabTitle="Chat" tabIcon="ios-chatboxes-outline" ></ion-tab> <ion-tab [root]="UserProfileTab" tabTitle="User Profile" tabIcon="ios-contact-outline" > </ion-tab><ion-tab [root]="NotificationTab" tabTitle="Notifications" tabIcon="ios-notifications-outline"></ion-tab><ion-tab [root]="MessagesTab" tabTitle="Messages" tabIcon="ios-chatboxes-outline"></ion-tab></ion-tabs>'
})

export class TabsPage {


  StockListTab = StocklistPage;
  Profile = UserProfilePage;
  Notifications = NotificationPage;
  Messages = MessagePage;
  UserWatchlistTab = UserwatchlistPage;


  

  constructor(public navCtrl: NavController) {

  }
}
