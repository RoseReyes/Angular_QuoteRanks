import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAuthor(){
    return this._http.get('/authors');
  }
  postAuthor(newAuthors){
    return this._http.post('/newauthor',newAuthors);
  }

  deleteAuthor(id){
    return this._http.delete('/newauthor/'+ id + '');
  }

  editAuthor(id:String, updateAuthor){
    return this._http.put('/newauthor/'+ id + '',updateAuthor);
  }

  oneAuthor(id:String){
    console.log("service", id);
    return this._http.get('/oneauthor/'+id+'');
  }

  createQuote(id:String, newQuote){
    return this._http.post('/newquote/'+ id +'', newQuote);
  }

  deleteQuote(id:String, delquote: String){
    console.log("I'm in the service");
    return this._http.delete('/newquote/'+ id + "/" + delquote);
  }
  
  voteQuote(id: String, quote){
    console.log("I am in service");
    return this._http.post('/updatevote/'+ id, quote);
  }
}
