import { Component } from '@angular/core';
import { NavController , ToastController, Events} from 'ionic-angular';

@Component({
  templateUrl: 'AddVehicle.html'
})
export class AddVehicle {
  
  constructor(public navCtrl: NavController, public toastCtrl : ToastController,
  public event: Events) {}
  qrClick(){
     let toast = this.toastCtrl.create({
      message: 'This feature is not implemented yet',
      duration: 3000
    });
    toast.present();
  }
  addVehicle(){
    let data = {
      id : "test",
      name : "test_name"
    };
    this.event.publish("add:vehicle", data);
    this.navCtrl.pop();
  }
}
