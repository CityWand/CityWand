import { Component } from '@angular/core';
import { NavController , ToastController, Events} from 'ionic-angular';

@Component({
  templateUrl: 'AddVehicle.html'
})
export class AddVehicle {
  
  vehicles: any = {};
  initVehicles() {
    this.vehicles['recent'] = [];
    this.vehicles['favorite'] = [
      {
        dp : "../assets/images/cab1.jpg",
        title : "SRS Cab-1",
        desc : "SRS Travels, Hyderabad",
      },
       {
        dp : "../assets/images/cab2.jpg",
        title : "SRS Cab-2",
        desc : "SRS Travels, Hyderabad"
      },
       {
        dp : "../assets/images/cab3.jpg",
        title : "SRS Cab-33",
        desc : "SRS Travels, Hyderabad"
      }

    ];
    this.vehicles.length = 2;
  }
  constructor(public navCtrl: NavController, public toastCtrl : ToastController,
  public event: Events) {}
  qrClick(){
    this.addVehicle();
    //  let toast = this.toastCtrl.create({
    //   message: 'This feature is not implemented yet',
    //   duration: 3000
    // });
    // toast.present();
  }
  addVehicle(){
    this.initVehicles();
    this.event.publish("add:vehicle", this.vehicles);
    this.navCtrl.pop();
  }
}
