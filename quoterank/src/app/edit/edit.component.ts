import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Header ='Favorite Authors';
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }
  updateAuthor: any;
  editError;

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
       this.getOneAuthor(params['id']);
    })
  }
  
  getOneAuthor(id){
    let oneAuthorObservable = this._httpService.oneAuthor(id);
    oneAuthorObservable.subscribe(data =>{
      console.log("Get one author", data);
      this.updateAuthor = data;
    })

  }

  onUpdateAuthorClick(id){
    console.log("i am in the update");
    let editAuthorsObservable = this._httpService.editAuthor(id, this.updateAuthor);
    editAuthorsObservable.subscribe(data => {
    console.log(data, "updateAuthor");
        if(data['errors']){
          this.editError = data['errors'];
          console.log(this.editError, "One errormessage");
        }
        else {
          this._router.navigate(['/']);
        }
    })
  }
}
