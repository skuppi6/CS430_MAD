import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StockProvider } from '../../providers/stock/stock'
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // items:any;
  storageItems: any; // Array<StorageItem>;

  constructor(public navCtrl: NavController, private stockProvider:StockProvider,
              private storage:Storage)
  {
     //this.storageItems = [];
     this.loadData();
  }

  // function iterates each entry on storage and dynamically populates ion cards with information.
  loadData()
  {
    // key, index
    this.storage.forEach((value) => { this.storageItems.push(value); });
  }

  // this function is called when user swipes to delete a card.
  deleteCard(item)
  {
    console.log("Attempting to delete item: " + item);
    // Calls delStock function in stockProvider
    this.stockProvider.delStock(item);

    // Refreshes HomePage to reflect changes.
    this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(HomePage);
  }
}

