import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  SideMenuOptionsTreeStoreService,
} from '../services/side-menu-options-tree-store/side-menu-options-tree-store.service';
import { ItemNode } from '../services/side-menu-options-tree/side-menu-options-tree.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  sideMenuOptionsTree$: Observable<{}>;

  constructor(private sideMenuOptionsTreeStoreService: SideMenuOptionsTreeStoreService) {

    // In the case this was an access to a backend to gather the data,
    // server side call, we should move to the ngOnInit method
    this.sideMenuOptionsTree$ = this.sideMenuOptionsTreeStoreService.ojbTree$;
  }

  ngOnInit() {
    // Do your backend access here
    // properly stream your observables if they need to be chained
    // etc.

    // Select the first options and inform to the page loaded
  }

  selectionChanged(selectedOptions: ItemNode[]) {
    this.sideMenuOptionsTreeStoreService.optionsSel = selectedOptions;
  }
}
