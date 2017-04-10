import { Component, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { NavController, Events, ToastController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'VehicleDetails.html'
})

export class VehicleDetails {

    vehicleName: String;
    vehicle: any[];
    seatsRow1  = [1,2,3,4,5,6,7,8,9,10,11,12];
    seatsRow2  = [1,2,3,4,5,6,7,8,9,10];
    seatsRow3  = [1,2,3,4,5,6,7,8];

    constructor(public navCtrl: NavController, public events: Events, public params: NavParams,
    public cd :ChangeDetectorRef) {
        this.vehicle = params.get('vehicle');
    }
    ionViewDidLoad() { }
}