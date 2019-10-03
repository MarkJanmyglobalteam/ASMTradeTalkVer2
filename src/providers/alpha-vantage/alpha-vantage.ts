import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AlphaVantageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlphaVantageProvider {
  BASE_URL = 'https://cors-anywhere.herokuapp.com/https://eodhistoricaldata.com/api/real-time/';
  query: string;
  constructor(public http: Http) {
    
  }

  buildQuery(data) {
    let params = {
      symbol: data.symbol
  
    }

    this.query = this.encodeQueryData(params);
    return this;
  }

  fetch() {
    let url = this.BASE_URL + this.query + "?api_token=5a4c5a8b13c90 "+  "&fmt=json";
    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  encodeQueryData(data) {
  
    let ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(data[d]));
      console.log(data);
    return ret.join('?');
 
 }
 
}

