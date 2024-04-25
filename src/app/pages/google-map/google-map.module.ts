import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapRoutingModule } from './google-map-routing.module';
import { GoogleMapComponent } from './google-map.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    GoogleMapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ]
})
export class GoogleMapModule { }
