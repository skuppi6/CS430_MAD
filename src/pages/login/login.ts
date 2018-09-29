import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, private faio: FingerprintAIO)
  {

  }

  login() {
    this.faio.show({
      clientId: 'Fingerprint-stock',
      clientSecret: 'password', // Android
      localizedFallbackTitle: 'Use Pin', // iOS
      localizedReason: 'Please authenticate' // iOS
      })
        .then((result: any) => { this.navCtrl.push(TabsPage);
        // .then((result: any) => {this.navCtrl.setRoot('HomePage');
        })
        .catch((error: any) => { console.log('err: ', error);
        })
       // .then(result => { this.navCtrl.setRoot('TabsPage'); })
       // .catch(err => { console.log('Error: ', err); })
  }
}
