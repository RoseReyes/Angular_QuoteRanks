import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
Header = 'Quote Ranks';
newAuthors: any;
error;
  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) {
    this.newAuthors = {name:""};
  }
  
  ngOnInit() {
  }

  onCreateAuthorClick(){
    let createAuthorObservable = this._httpService.postAuthor(this.newAuthors);
    createAuthorObservable.subscribe(data=>{
    console.log(data);
        if(data['errors']){
          this.error = data['errors'];
          console.log(this.error, "One errormessage");
        }
        else {
          this._router.navigate(['/']);
        }
      })
      
  }
}

