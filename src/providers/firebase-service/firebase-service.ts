import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseServiceProvider Provider');

    // getItems(){}

    // addItem(placeHolder){
    //  this.afd.list('someStuff').push(placeHolder);
    //}

    //removeItem(Placeholder){}
   }

}
