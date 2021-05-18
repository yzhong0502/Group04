import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("email");
    this.router.navigateByUrl("/login");
  }

  isLogin(): boolean {
    return window.localStorage.getItem("token") !=null;
  }
}
