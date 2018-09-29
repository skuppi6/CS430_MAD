import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
import { StockProvider } from '../../providers/stock/stock';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
ticker:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private stockProvider:StockProvider)
  {

  }

  submit(){

    // Set ticker var to input on search page.
    let ticker = this.ticker

    // Clears input field on search page.
    this.ticker = '';

    // Calling custom stockProvider to query stock quotes.
    this.stockProvider.getStock(ticker)

    // Navigates to HomePage and refreshes page to reflect any possible changes.
    this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(HomePage);
    }
}
