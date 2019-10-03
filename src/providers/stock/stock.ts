import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

 let getApiUrl  = "https://www.alphavantage.co/query?symbol=ASX.AX&interval=15min&outputsize=full&apikey=EDYE98D5GTFTA1VC";

/*
  Generated class for the StockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StockProvider {
  data1: any;
  stockData: any;
  constructor(public http: Http) {
    console.log('Hello StockProvider Provider');


  }

  stocks = [
    { asx_code: 'ASX.AX', name: 'ASX LIMITED' }
  ]

  load() {
    if (this.stockData) {
      return Promise.resolve(this.stockData);
    }
    return new Promise(resolve => {
      this.http.get(getApiUrl)
        .map(res => res.json())
        .subscribe(data => {
          this.stockData = data;
          resolve(this.stockData);
        });
    });
  }  


}
