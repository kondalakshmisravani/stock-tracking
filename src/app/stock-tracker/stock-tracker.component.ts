import { Component, OnInit } from '@angular/core';
import { Quote } from '../model/quote';
import { Stock } from '../model/stock';
import { StockTrackerService } from '../stock-tracker.service';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.css']
})
export class StockTrackerComponent implements OnInit {
  public InputFieldEnter: string = "";

  public displayContent = [
    { text: 'main', display: true },
    { text: 'socialsentiment', display: false }
  ]

  // public selectedSocialSentiment:any='';
  // public selectedSocialSentimentAry:any=[];
  //loader
  public getQuoteLoader: boolean = false
  constructor(private _stockHttp: StockTrackerService) { }
  public stockData: Quote[];
  ngOnInit(): void {
    if (this.StorgeLocal_GetItem('stockVal')) {

      var localget = JSON.parse(this.StorgeLocal_GetItem('stockVal'))
    }
    else {
      var localget = null;
    }
    if (localget != null) {
      console.log(localget)
      this.stockData = localget
    }

  }

  getQuote(): void {
    if (this.InputFieldEnter.length > 0 && this.InputFieldEnter.length - 1 < 5) {
      this.getQuoteLoader = true
      this._stockHttp.getQuote(this.InputFieldEnter).subscribe((res: Quote) => {
        console.log(res, 'testing')
        if (res.dp == null || res.d == null) {
          return
        }
        console.log(this.StorgeLocal_GetItem('stockVal'))
        res.name = this.InputFieldEnter
        if (this.StorgeLocal_GetItem('stockVal')) {
          var localget = JSON.parse(this.StorgeLocal_GetItem('stockVal'))
        }
        else {
          var localget = null;
        }
        var localSet;
        console.log(localSet)
        if (localget != null) {
          localSet = [res, ...localget]
        } else {
          localSet = [res]
        }
        this.StorgeLocal_SetItem(JSON.stringify(localSet));
        localget = JSON.parse(this.StorgeLocal_GetItem('stockVal'))
        if (localget != null) {
          console.log(localget)
          this.stockData = localget
        }
        this.getQuoteLoader = false
      }, err => {
        this.getQuoteLoader = false
      })
    } else {
      alert('Enter Valid data , Enter less than 5 and gather than Zero ')
    }
  }



  StorgeLocal_GetItem(key: string): string {
    return localStorage.getItem(key)
  }

  StorgeLocal_SetItem(value: string): void {
    try {
      localStorage.setItem('stockVal', value)
    } catch (e) { }
  }

  removeElement(id: number): void {
    console.log(id)
    var localget = JSON.parse(this.StorgeLocal_GetItem('stockVal'))
    var localSet: Array<object> = [];
    if (localget != null) {
      localget.forEach((res: object, ind: number) => {
        if (ind != id) {
          localSet.push(res)
        }
      })
    }
    this.StorgeLocal_SetItem(JSON.stringify(localSet));
    localget = JSON.parse(this.StorgeLocal_GetItem('stockVal'))
    if (localget != null) {
      console.log(localget)
      this.stockData = localget
    }
  }
  changeContent(id: number): void {
    this.displayContent.forEach((res: { display: boolean }, ind: number) => {
      if (ind == id) {
        res.display = true;
      } else {
        res.display = false;
      }
    })
  }

}