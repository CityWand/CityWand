import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { AddVehicle } from '../AddVehicle/AddVehicle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  vehicles: any = [];

  constructor(public navCtrl: NavController, public events: Events) {}
 
  getVehicleCount = function () {
    this.vehicles.length;
  }

  ionViewDidLoad() {
    this.events.subscribe("add:vehicle", (vehicles) => {
      this.vehicles = vehicles;
    });
  }
  addVehicle() {
    this.navCtrl.push(AddVehicle);
  }

  selectVehicle(){
    
  }

  searchVehicel(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();

    // // set val to the value of the searchbar
    // let val = ev.target.value;

    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.items = this.items.filter((item) => {
    //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }
}
