import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
  ]
})
export class CustomersModule { }
