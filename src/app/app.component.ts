import { Component } from '@angular/core';

import { CustomersService } from './customers/services/customers.service';
import { HomeService } from './home/services/home/home.service';
import { CustomersService as CustomersRootService } from './services/customers/customers.service';
import { HomeService as HomeRootService } from './services/home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng7-test-project';

  constructor(private customersService: CustomersService,
              private homeService: HomeService,
              private homeRootService: HomeRootService,
              private customersRootService: CustomersRootService) {
  }
}
