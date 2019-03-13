import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2/page2.component';
import { TitleBarModule } from '../title-bar/title-bar.module';

@NgModule({
  declarations: [Page2Component],
  imports: [
    CommonModule,
    Page2RoutingModule,
    TitleBarModule
  ]
})
export class Page2Module { }
