import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  registerUser(userDetails): Observable<any>{
    return this.http.post<any>(this.url+"/register",userDetails)
  }

  loginUser(userDetails): Observable<any>{
    return this.http.post<any>(this.url+"/login",userDetails)
  }
}
