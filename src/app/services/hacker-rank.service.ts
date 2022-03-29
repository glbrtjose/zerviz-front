import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackerRankService {

  url = 
    // `http://localhost:3000/posts/`
    `https://zerviz-back.herokuapp.com/posts/`
  ;
  constructor(private _HttpClient: HttpClient) { }

  get():Observable<any>{
    return this._HttpClient.get(this.url);
  }

  delete(_id:string):Observable<any>{
    return this._HttpClient.delete(`${this.url}${_id}`);
  }
}
