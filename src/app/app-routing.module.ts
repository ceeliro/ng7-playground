import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home2Component } from './home/home2/home2.component';
import { ItemsListComponent } from './items/items-list/items-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: Home2Component
  },
  {
    path: 'items',
    component: ItemsListComponent
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: 'exampleApp',
    loadChildren: './example-app/example-app.module#ExampleAppModule'
  },
  {
    path: '',
    redirectTo: 'exampleApp',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
