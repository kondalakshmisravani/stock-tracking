import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';

const routes: Routes = [{
  path: "",
  component: StockTrackerComponent,
}, {
  path: "sentiment/:id",
  component: SentimentComponent,
},]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }