import { animate, style, transition, trigger, state, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SideMenuStoreService } from '../services/side-menu-store/side-menu-store.service';
import {
  SideMenuOptionsTreeStoreService
} from '../services/side-menu-options-tree-store/side-menu-options-tree-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({transform: 'translateY(-100%)'}))
      ])
    ]),
  ]
})
export class MainComponent implements OnInit {

  isSideMenu$: Observable<boolean>;

  constructor(private sideMenuStoreService: SideMenuStoreService) {

    this.isSideMenu$ = this.sideMenuStoreService.sideMenu$;
  }

  ngOnInit() {
    // Do your backend access here
    // properly stream your observables if they need to be chained
    // etc.
  }

}
