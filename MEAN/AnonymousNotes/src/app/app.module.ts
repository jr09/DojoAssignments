import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewnoteComponent } from './newnote/newnote.component';
import { NotelistComponent } from './notelist/notelist.component';

import { NoteserviceService } from './noteservice.service'

@NgModule({
  declarations: [
    AppComponent,
    NewnoteComponent,
    NotelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
