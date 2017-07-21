import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { ChicagoComponent } from './chicago/chicago.component'
import { DallasComponent } from './dallas/dallas.component'
import { SeattleComponent } from './seattle/seattle.component'
import { SanjoseComponent } from './sanjose/sanjose.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full'},
  {path: 'seattle', component: SeattleComponent},
  {path: 'sanjose', component: SanjoseComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'chicago', component: ChicagoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
