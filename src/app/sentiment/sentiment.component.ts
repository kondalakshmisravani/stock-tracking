import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sentiment, SentimentInfo } from '../model/sentiment';
import { StockTrackerService } from '../stock-tracker.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css'],
})
export class SentimentComponent implements OnInit {
  public getQuoteLoader: boolean = false;
  public selectedSocialSentimentAry: Sentiment[];
  public symbol: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _stockHttp: StockTrackerService
  ) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params.id);
    this.getSelectedSocialSentiment();
  }

  getSelectedSocialSentiment(): void {
    this.getQuoteLoader = true;
    this._stockHttp
      .getStockInsiderDate(this.activatedRoute?.snapshot.params?.['id'])
      .subscribe(
        (res: SentimentInfo) => {
          console.log(res);
          this.selectedSocialSentimentAry = res.data;
          this.symbol = res.symbol;
          this.getQuoteLoader = false;
        },
        (err) => {
          this.getQuoteLoader = false;
        }
      );
  }

  getMonths(Num: number): string {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[Num - 1];
  }
}
