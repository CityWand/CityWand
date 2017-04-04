import { Component , ViewChild} from '@angular/core';
import { NavController, Events , ToastController} from 'ionic-angular';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';

declare var google;

@Component({
  templateUrl: 'nearby.html'
})
export class NearByPage {

  @ViewChild('map') mapElement;

  constructor(public navCtrl: NavController, public events : Events, private toastCtrl: ToastController) {}
  ionViewDidLoad(){
    this.initMaps();
  }
  initMaps(){
     let toast = this.toastCtrl.create({
        message: 'Double click on vehicle for more info.',
        duration: 3000,
        position: 'top'
      });
      toast.present();

       let latLang = new google.maps.LatLng(17.4463678,78.3870978);
            let mapOptions = {
              center : latLang,
              zoom :18,
              mapTypeId: 'roadmap'
            };
           let map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
           //map.moveCamera( CameraUpdateFactory.newLatLngZoom(new LatLng(xxxx,xxxx) , 14.0f) );
            let marker1 = new google.maps.Marker({
                  map: map,
                  position: new google.maps.LatLng(17.4465017,78.3875064),
                  icon : "../assets/images/car_white.png"
              });
          new google.maps.event.addListener(marker1, "dblclick", (e) => {
              var vehicle = {
                id : "102356",
                name : "MS-1003-HT",
                type : "Local Cab"
              }; 
             this.navCtrl.push(VehicleDetails, {vehicle : vehicle} );
          });
          let marker2 = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(17.4468847,78.3875055),
                icon : "../assets/images/bus_yellow.png"
            });
            new google.maps.event.addListener(marker2, "dblclick", (e) => {
              var vehicle = {
                id : "785689",
                name : "My Bus",
                type : "Private Bus"
              }; 
              this.navCtrl.push(VehicleDetails, {vehicle : vehicle});
          });
         let marker3 =   new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(17.4463017,78.3872978),
                icon : "../assets/images/truck_2.png"
            });
          new google.maps.event.addListener(marker3, "dblclick", (e) => {
              var vehicle = {
                id : "455689",
                name : "SVC Exports-78",
                type : "Private Truck"
              }; 
              this.navCtrl.push(VehicleDetails, {vehicle : vehicle});
          });
           let marker4 =   new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(17.4461017,78.3877361),
                icon : "../assets/images/car_yellow.png"
            });
          new google.maps.event.addListener(marker4, "dblclick", (e) => {
              var vehicle = {
                id : "784411",
                name : "KLN Transports",
                type : "Local Cab"
              }; 
              this.navCtrl.push(VehicleDetails, {vehicle : vehicle});
          });
          let marker5 =   new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(17.4463678,78.3870978),
                icon : "../assets/images/ambulance.png"
            });
            new google.maps.event.addListener(marker5, "dblclick", (e) => {
              var vehicle = {
                id : "785252",
                name : "YUI Hospitals",
                type : "Ambulance"
              }; 
              this.navCtrl.push(VehicleDetails, {vehicle : vehicle});
          });
  }

}
