import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NombrePage } from '../nombre/nombre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  usuario:string=" ";
  
  constructor(public navCtrl: NavController) {

  }
  goToPage(){
 this.navCtrl.push(NombrePage)
  }
}
9