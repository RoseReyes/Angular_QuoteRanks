import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Header ='Quote Ranks';
   allAuthors;
   oneQuote;
   constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) {}

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    let getAuthorsObservable = this._httpService.getAuthor()
    getAuthorsObservable.subscribe(data =>{ 
      console.log("Displayed all data", data);
      this.allAuthors = data;
    })
  }

  // getQuotes(id){
  //   let getQuotesObservable = this._httpService.getQuote(id)
  //   getQuotesObservable.subscribe(data =>{
  //     console.log("One quote",data);
  //     this.oneQuote = data;
  //   })

  // }
  
  // destroyAuthor(id){
  //   let delAuthorsObservable = this._httpService.deleteAuthor(id)
  //   delAuthorsObservable.subscribe(data => {
  //     console.log("Deleted one author", data);
  //   })
  //   this.getAuthors() // Call the updated set of data after deletion without refreshing the page
  // }

}
