import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url = 'http://localhost:3000/api/news';
  private token = localStorage.getItem('token');
  private httpoptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "authorization" :this.token
    })
  };

  constructor(private http: HttpClient) { }

  addNews(newsDetails): any{
    return this.http.post(this.url+"/addNews", newsDetails, this.httpoptions)
  }

  listNews(): any{
    return this.http.get(this.url+"/getNews")
  }

  editNews(newsDetails): any{
    return this.http.put(this.url+"/editNews", newsDetails, this.httpoptions)
  }

  deleteNews(id): any{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "authorization" :this.token
      }),
      body: {
        _id: id
      },
    };
    return this.http.delete(this.url+"/deleteNews", options)
  }
}
