import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  registrationForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {}

  ngOnInit(): void {}



  onClickRegister() {
    this.registerService.registerUser({name: this.registrationForm.get('fullName').value,
     email: this.registrationForm.get('email').value,
     password: this.registrationForm.get('password').value}).subscribe(data=>{
       if(data?.status === "success"){
          window.localStorage.setItem("token",data?.data?.token);
          window.localStorage.setItem("name",data?.data?.name);
         window.localStorage.setItem("email",data?.data?.email);
          alert(data.message);
          this.router.navigateByUrl("/news-list");
       } else {
         alert(data.message);
       }
    })
  }

  onClickLogin(){
    this.registerService.loginUser({email: this.loginForm.get('email').value,
    password: this.loginForm.get('password').value}).subscribe(data=>{
      if(data?.status === "success"){
        window.localStorage.setItem("token",data?.data?.token)
        window.localStorage.setItem("name",data?.data?.name);
        window.localStorage.setItem("email",data?.data?.email);
        alert(data.message);
        this.router.navigateByUrl("/news-list");
     } else {
        alert(data.message);
      }
   })
  }

  onClickLoginReset(){
    this.loginForm.reset();
  }

  onClickRegistrationReset(){
    this.registrationForm.reset();
  }

}
