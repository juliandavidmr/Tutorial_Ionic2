import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataTest } from '../../providers/data-test';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [
    [DataTest]
  ]
})
export class Page1 {
  
  info: any;

  constructor(
    public navCtrl: NavController,
    public data: DataTest
  ) {
    this.info = this.data.load();

    this.data.saveData('Hola, estoy almacenado en el telefono.');
  }

}
