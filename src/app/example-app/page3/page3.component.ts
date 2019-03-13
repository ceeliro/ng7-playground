import { Component, OnInit } from '@angular/core';
import { SideMenuStoreService } from '../services/side-menu-store/side-menu-store.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private sideMenuSSService: SideMenuStoreService) {
    this.sideMenuSSService.isSideMenu = false;
  }

  ngOnInit() {
  }

}
