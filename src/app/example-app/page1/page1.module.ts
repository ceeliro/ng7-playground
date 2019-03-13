import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1/page1.component';
import { TitleBarModule } from '../title-bar/title-bar.module';

@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule,
    Page1RoutingModule,
    TitleBarModule
  ]
})
export class Page1Module { }
