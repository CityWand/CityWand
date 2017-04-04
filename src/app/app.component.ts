import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { NearByPage } from '../pages/nearby/nearby';


@Component({
  templateUrl: 'app.html'
})
export class App {
  home = HomePage;
  nearby = NearByPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
