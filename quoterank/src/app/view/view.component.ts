import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  Header ='Quote Ranks';
   constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

   Id;
   OneAuthor;

  ngOnInit() {
    this._route.params.subscribe((params: Params) => (this.Id = params['id']));
    let author = this._httpService.oneAuthor(this.Id).subscribe(data => {
      this.OneAuthor = data;
    })
  }
  
  voteUp(qId) {
    console.log("I am in component.ts");
    let votes = this._httpService.voteQuote(this.OneAuthor._id,
      { "id": qId, "voteVal": 1 }).subscribe(data => {
        this.OneAuthor = data;
      });

  }

  voteDown(qId) {
    let votes = this._httpService.voteQuote(this.OneAuthor._id,
      { "id": qId, "voteVal": -1 }).subscribe(data => {
        this.OneAuthor = data;
      });
  }

  destroyQuote(qId){
    console.log("I'm in the view component.ts");
    let delAuthorsObservable = this._httpService.deleteQuote(this.OneAuthor._id, qId)
    delAuthorsObservable.subscribe(data => {
      console.log("Deleted one quote", data);
      this.OneAuthor = data; // Call the updated set of data after deletion without refreshing the page
    })
  }

}
