import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './model/quote';
import { SentimentInfo } from './model/sentiment';


@Injectable()
export class StockTrackerService {

  constructor(private _http: HttpClient) { }

  public headers = new Headers({ 'token': 'bu4f8kn48v6uehqi3cqg' });
  // .set('token', 'bu4f8kn48v6uehqi3cqg')


  getQuote(symbol: string): Observable<Quote> {
    // e.x :- symbol -AAPL
    return this._http.get<Quote>(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bu4f8kn48v6uehqi3cqg`)
  }

  getStockInsiderDate(symbol: string): Observable<SentimentInfo> {
    // e.x :- symbol -AAPL
    return this._http.get<SentimentInfo>(`https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${symbol}&from=2022-09-01&to=2022-11-01&token=bu4f8kn48v6uehqi3cqg`)
  }


}