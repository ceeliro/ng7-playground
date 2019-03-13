import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Home2Component } from './home2/home2.component';

@NgModule({
  declarations: [Home2Component],
  exports: [Home2Component],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
