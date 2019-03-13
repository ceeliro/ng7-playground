import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
    console.log('Hey I am a service of the root app');
  }
}
