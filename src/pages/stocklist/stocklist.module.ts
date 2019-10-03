import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StocklistPage } from './stocklist';

@NgModule({
  declarations: [
    StocklistPage,
  ],
  imports: [
    IonicPageModule.forChild(StocklistPage),
  ],
})
export class StocklistPageModule {}
