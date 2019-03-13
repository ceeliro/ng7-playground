import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Page3Component } from './page3/page3.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'page1',
        loadChildren: './page1/page1.module#Page1Module'
      },
      {
        path: 'page2',
        loadChildren: './page2/page2.module#Page2Module'
      },
      {
        path: 'page3',
        component: Page3Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleAppRoutingModule { }
