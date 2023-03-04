import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { D1Component } from './list/d1/d1.component';
import { D2Component } from './list/d2/d2.component';
import { D3Component } from './list/d3/d3.component';
import { D4Component } from './list/d4/d4.component';
import { D5Component } from './list/d5/d5.component';
import { D6Component } from './list/d6/d6.component';
import { D7Component } from './list/d7/d7.component';

import { SecondComponent } from './second/second.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    D1Component,
    D2Component,
    D3Component,
    D4Component,
    D5Component,
    D6Component,
    D7Component,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
