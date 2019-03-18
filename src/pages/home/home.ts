import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  students: Array<string>;

  constructor(public navCtrl: NavController) {

    this.students = [
      'otavio',
      'pedro',
      'rafael',
      'henrique'
    ]

  }
}
