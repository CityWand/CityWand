import { Component } from '@angular/core';
import { NavController, ToastController, Events } from 'ionic-angular';

@Component({
  templateUrl: 'AddVehicle.html'
})
export class AddVehicle {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
    public event: Events) { }
  qrClick() {
    this.addVehicle();
    //  let toast = this.toastCtrl.create({
    //   message: 'This feature is not implemented yet',
    //   duration: 3000
    // });
    // toast.present();
  }
  addVehicle() {
    this.event.publish("add:vehicle");
    this.navCtrl.pop();
  }
}
