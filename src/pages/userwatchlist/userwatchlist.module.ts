import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserwatchlistPage } from './userwatchlist';

@NgModule({
  declarations: [
    UserwatchlistPage,
  ],
  imports: [
    IonicPageModule.forChild(UserwatchlistPage),
  ],
})
export class UserwatchlistPageModule {}
