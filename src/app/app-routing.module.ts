import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { D1Component } from './list/d1/d1.component';
import { D2Component } from './list/d2/d2.component';
import { D3Component } from './list/d3/d3.component';
import { D4Component } from './list/d4/d4.component';
import { D5Component } from './list/d5/d5.component';
import { D6Component } from './list/d6/d6.component';
import { D7Component } from './list/d7/d7.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
 
  {
    path:'header',
    component:HeaderComponent,
    children:[
      {path:'d1',component:D1Component},  {path:'d2',  component:D2Component }, {path:'d3',component:D3Component}, { path:'d4',component:D4Component}, 
      {path:'d5',component:D5Component}, {path:'d6',component:D6Component},  {path:'d7',component:D7Component}
    ]
  },
  {
    path:'d1',
    component:D1Component
  },
  {
    path:'d2',
    component:D2Component
  },
  {
    path:'d3',
    component:D3Component
  },
  {
    path:'d4',
    component:D4Component
  },
  {
    path:'d5',
    component:D5Component
  },
  {
    path:'d6',
    component:D6Component
  },
  {
    path:'d7',
    component:D7Component
  },
  {
    path:'second',
    component:SecondComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
