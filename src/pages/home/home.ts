import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { AddVehicle } from '../AddVehicle/AddVehicle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public events : Events) {}
  
  ionViewDidLoad(){
   this.events.subscribe("add:vehicle", (data) => {
   });
  }
  
  addVehicle(){
    this.navCtrl.push(AddVehicle);
  }
}
