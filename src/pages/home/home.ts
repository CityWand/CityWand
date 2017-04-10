import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { AddVehicle } from '../AddVehicle/AddVehicle';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  favorites: any = [];
  recentVisits: any = [];

  constructor(public navCtrl: NavController, public events: Events) { }

  ionViewDidLoad() {
    this.events.subscribe("add:vehicle", () => {
      this.favorites = [
        {
          id: "5050",
          dp: "../assets/images/cab1.jpg",
          title: "SRS Cab-1",
          desc: "SRS Travels, Hyderabad",
          type: "Local Cab",
          typeBagdeColor: "#387ef5"
        },
        {
          id: "5050",
          dp: "../assets/images/cab2.jpg",
          title: "SRS Cab-2",
          desc: "SRS Travels, Hyderabad",
          type: "Local Cab",
          typeBagdeColor: "#387ef5"
        },

      ];
      this.recentVisits = [
        {
          id: "5050",
          dp: "../assets/images/cab3.jpg",
          title: "SRS Cab-3",
          desc: "SRS Travels, Hyderabad",
          type: "Local Cab",
          typeBagdeColor: "#387ef5"
        }
      ];
    });
  }
  addVehicle() {
    this.navCtrl.push(AddVehicle);
  }

  selectVehicle(vehicle) {
    this.navCtrl.push(VehicleDetails, {vehicle : vehicle} );
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
