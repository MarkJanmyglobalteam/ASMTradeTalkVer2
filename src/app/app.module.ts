
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';



import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CreateAccount } from '../pages/create-account/create-account';
import { UserlistPage } from '../pages/userlist/userlist';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import {UserwatchlistPage} from '../pages/userwatchlist/userwatchlist';
import {PasswordresetPage} from '../pages/passwordreset/passwordreset';
import {StocklistPage} from '../pages/stocklist/stocklist';
import { StocksPage } from '../pages/stocks/stocks';
import { TrendingPage } from '../pages/stocks/trending/trending';


import { TopMoversPage } from '../pages/stocks/top-movers/top-movers'; 
import { TopStocksPage } from '../pages/stocks/top-stocks/top-stocks';
import { BottomStocksPage } from '../pages/stocks/bottom-stocks/bottom-stocks';
import { StocksInfoPage } from '../pages/stocks/stock-info/stock-info';
import { ConversationPage } from '../pages/conversation/conversation';
import { ChatPage } from '../pages/chat/chat';
import { NotificationPage } from '../pages/notification/notification';
import { MessagePage } from '../pages/messages/messages';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { StockProvider } from '../providers/stock/stock'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FIREBASE_CONFIG} from "./app.firebase.config";
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database-deprecated';
import { RequestProvider } from '../providers/request/request';
import { ChatProvider } from '../providers/chat/chat';
import { AvProvider } from '../providers/av/av';
import { AlphaVantageProvider } from '../providers/alpha-vantage/alpha-vantage';
import { StockDetailPage } from '../pages/stock-detail/stock-detail';
// import { FilePath } from '@ionic-native/file-path';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';


@NgModule({
declarations: [
MyApp,
AboutPage,
ContactPage,
LoginPage,
CreateAccount,
HomePage,
StocksPage,

UserwatchlistPage,

StockDetailPage,

TrendingPage,
TopMoversPage,
TopStocksPage,
BottomStocksPage,
StocksInfoPage,
ConversationPage,
ChatPage,
NotificationPage,
MessagePage,  
TabsPage,
UserlistPage,
UserProfilePage,
StocklistPage,
PasswordresetPage


],
imports: [
HttpModule,
BrowserModule,
IonicModule.forRoot(MyApp),
AngularFireModule.initializeApp(FIREBASE_CONFIG),
AngularFireAuthModule,
AngularFireDatabaseModule

],
bootstrap: [IonicApp],
entryComponents: [
MyApp,
AboutPage,
ContactPage,
LoginPage,
CreateAccount,
HomePage,
StocksPage,

UserwatchlistPage,

StockDetailPage,

TrendingPage,
TopMoversPage,
TopStocksPage,
BottomStocksPage,
StocksInfoPage,
ConversationPage,
UserlistPage,
ChatPage,
NotificationPage,
MessagePage,
TabsPage,
UserProfilePage,
StocklistPage,
PasswordresetPage
],
providers: [
StatusBar,
SplashScreen,
AuthProvider,
StockProvider,
Transfer,
Camera,
AngularFireAuth,
GooglePlus,
AngularFireAuth,
AngularFireDatabase,
AngularFireDatabaseModule,
{provide: ErrorHandler, useClass: IonicErrorHandler},
RequestProvider,
ChatProvider,
AvProvider, 
AlphaVantageProvider,
// FilePath,
File, FileChooser, 
    ImghandlerProvider
]
})
export class AppModule {}
