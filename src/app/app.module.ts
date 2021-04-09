import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
