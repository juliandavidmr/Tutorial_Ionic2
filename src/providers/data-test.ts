import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

/*
  Generated class for the DataTest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataTest {

  list: any = [{
    name: 'Julian',
    date: new Date()
  }, {
    name: 'David',
    date: new Date()
  }];

  local: any;

  constructor(public http: Http) {
    console.log('Hello DataTest Provider');

    this.local = new Storage();
  }

  load() {
    return this.list;
  }

  saveData(data: string) {
    this.local.set('Clave_dato1', data);

    this.local.get('Clave_dato1').then(data => {
      console.log("Dato almacenado: ", data);
    });
  }

}
