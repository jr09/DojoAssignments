import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { ListingsComponent } from './dashboard/listings/listings.component';
import { LoginComponent } from './login/login.component';

import { UserserviceService } from './userservice.service';
import { BikeserviceService } from './bikeservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BrowseComponent,
    ListingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CookieModule.forRoot(),
    HttpModule
  ],
  providers: [UserserviceService, BikeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
