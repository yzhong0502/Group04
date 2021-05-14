import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
 
  
  constructor(private http:HttpClient) { }
  sendQuery(email,query){
    console.log(query);
    return this.http.post("http://localhost:3000/api/query/send",{email,query});
  }
 
  news(){
    console.log();
      return this.http.get("http://localhost:3000/api/news/getNews");
  }

 
}
