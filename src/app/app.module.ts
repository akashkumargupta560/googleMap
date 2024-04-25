import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { GoogleMapModule } from './pages/google-map/google-map.module';
import { HomeModule } from './pages/home/home.module';
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CoreModule,
    GoogleMapModule,
    DashboardModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
