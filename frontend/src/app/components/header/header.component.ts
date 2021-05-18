import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  userName: string;
  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.isLoggedIn.subscribe(val=>{
      this.isAuthenticated = val;
      this.userName = localStorage.getItem("name");
    })
  }

  onClickLogout(){
    localStorage.clear();
    this.isAuthenticated = false;
    this.router.navigate(["/login"]);
  }

}
