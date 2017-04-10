import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddVehicle } from '../pages/AddVehicle/AddVehicle';
import { NearByPage } from '../pages/nearby/nearby';
import { VehicleDetails } from '../pages/VehicleDetails/VehicleDetails';


@NgModule({
  declarations: [
    App,
    HomePage,
    AddVehicle,
    NearByPage,
    VehicleDetails,
  ],
  imports: [
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    AddVehicle,
    NearByPage,
    VehicleDetails,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
