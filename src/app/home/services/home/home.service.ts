import { Injectable } from '@angular/core';

import { HomeModule } from '../../home.module';

@Injectable({
  providedIn: HomeModule
})
export class HomeService {

  constructor() {
    console.log('Hey I am a service of HomeModule');
  }

  logSomethingPlease() {

    console.log('Hey I am a service of HomeModule forced to log something');
  }
}
