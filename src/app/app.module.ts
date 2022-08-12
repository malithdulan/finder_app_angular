import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'

import { LocateVehicleComponent } from './locate-vehicle/locate-vehicle.component';
import { CurrentToVehicleComponent } from './current-to-vehicle/current-to-vehicle.component';
import { FromToVehicleComponent } from './from-to-vehicle/from-to-vehicle.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LocateVehicleComponent,
    CurrentToVehicleComponent,
    FromToVehicleComponent,
    NavigationHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMiq5YtOeFgK-pNNm1MI3ChpTX3C-oc4U',
      libraries: ['places']
    }),
    AgmDirectionModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
