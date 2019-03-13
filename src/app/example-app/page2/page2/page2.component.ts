import { Component, OnInit } from '@angular/core';
import { SideMenuStoreService } from '../../services/side-menu-store/side-menu-store.service';
import { SideMenuOptionsTreeStoreService } from '../../services/side-menu-options-tree-store/side-menu-options-tree-store.service';
import { ItemNode } from '../../services/side-menu-options-tree/side-menu-options-tree.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  itemNodes: ItemNode[];

  constructor(private sideMenuSSService: SideMenuStoreService,
              private sideMenuOptionsTreeStoreService: SideMenuOptionsTreeStoreService) {
    // Side menu is disabled for myself
    this.sideMenuSSService.isSideMenu = true;
  }

  ngOnInit() {
    // Here we could first reset the side menu state. On Init is invoke once so
    // is a good candidate for this
    this.sideMenuOptionsTreeStoreService.optionsSel = null;

    // Notify me whenever an option is selected in the side menu
    this.sideMenuOptionsTreeStoreService.optionsSel$.subscribe(selectedNodes => {
      this.itemNodes = selectedNodes;
    });
  }
}
