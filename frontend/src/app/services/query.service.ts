import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class QueryService {


  constructor(private http:HttpClient) { }
  sendQuery(email,query):Observable<any>{
    console.log(query);
    return this.http.post("http://localhost:3000/api/query/send",{email,query});
  }

  news():Observable<any>{
    console.log();
    return this.http.get("http://localhost:3000/api/news/getNews");
  }


}
