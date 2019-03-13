import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExampleAppRoutingModule } from './example-app-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainComponent } from './main/main.component';
import { Page3Component } from './page3/page3.component';
import { TitleBarModule } from './title-bar/title-bar.module';
import { MaterialModule } from '../material.module';
import { ObjTreeComponent } from './obj-tree/obj-tree.component';

@NgModule({
  declarations: [
    SideBarComponent,
    SideMenuComponent,
    MainComponent,
    Page3Component,
    ObjTreeComponent,
  ],
  imports: [CommonModule, ExampleAppRoutingModule, TitleBarModule, MaterialModule]
})
export class ExampleAppModule {}
