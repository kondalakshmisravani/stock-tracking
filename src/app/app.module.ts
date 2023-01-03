import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';
import { HttpClientModule } from '@angular/common/http';
import { StockTrackerService } from './stock-tracker.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './router.module';
import { SentimentComponent } from './sentiment/sentiment.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    StockTrackerComponent,
    SentimentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [StockTrackerService],
})
export class AppModule {}
