import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: "battle", component: BattleComponent},
  {path: "rankings", component: RankingsComponent},
  {path: "results", component: ResultsComponent},
  {path: "", redirectTo: "battle", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
