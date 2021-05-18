import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = 'http://localhost:3000/api/auth';
  isLoggedIn: BehaviorSubject<boolean>;
  constructor(private http: HttpClient) {
    this.isLoggedIn = new BehaviorSubject(false);
   }

  registerUser(userDetails): any{
    return this.http.post(this.url+"/register",userDetails)
  }

  loginUser(userDetails): any{
    return this.http.post(this.url+"/login",userDetails)
  }

  userLoggedIn(){
    this.isLoggedIn.next(localStorage.getItem('token') && localStorage.getItem('token') != "");
  }
}
