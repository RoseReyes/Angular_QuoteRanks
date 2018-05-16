import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {
  Header ='Quote Ranks';
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute, //ActivatedRoute service provides a params Observable 
                                  //which we can subscribe to  get the route parameters 
  ) { 
    this.newQuote = {quote:""};
  }
  oneQuote: any;
  newQuote;
  quoteError;

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
       this.getOneAuthor(params['id']);
    })
   
  }
  
  getOneAuthor(id){
    let oneAuthorObservable = this._httpService.oneAuthor(id);
    oneAuthorObservable.subscribe(data =>{
      console.log("Get one author", data);
      this.oneQuote = data;
    })
  }

  onCreateQuoteClick(id){
    let createquoteObservable = this._httpService.createQuote(id, this.newQuote)
    createquoteObservable.subscribe(data => {
      console.log(data, "saved quote");
        if(data['errors']){
          this.quoteError = data['errors'];
        }
        else {
          this._router.navigate(['/quotes',id]);
        }
    })
  }

}
