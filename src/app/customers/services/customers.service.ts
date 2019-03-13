import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() {
    console.log('Hey I am a customer service of CustomerModule');
  }
}
