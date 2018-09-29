import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';

@Injectable()
export class StockProvider
{
  url;
  items:any = [];

  constructor(public http: HttpClient, private storage:Storage)
  {
    this.url = 'https://ws-api.iextrading.com/1.0/stock/';
  }

  // Get stock and store results on device storage.
  getStock(symbol)
  {
    console.log("Getting stock from: " + this.url + symbol + '/book');
    let data = this.http.get(this.url+symbol+'/book');

    data.subscribe(result => { this.items = result; this.storage.set(this.items.quote.symbol,
                                                                     this.items.quote); }, (error: any) => { if (error){ console.log("this is an error: " + error)}; })
  }

  // Deletes stock storage on local storage
  delStock(symbol)
  {
    console.log("Deleting stock: " + symbol);
    this.storage.remove(symbol);
  }
}
