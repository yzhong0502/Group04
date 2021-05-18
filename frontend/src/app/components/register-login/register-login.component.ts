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

  registrationSuccess: boolean = false;
  registrationMessage: string = "";
  registrationFailure: boolean = false;
  loginMessage: string = "";
  loginFailure: boolean = false;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {}

  ngOnInit(): void {}

  onClickRegister() {
    this.registerService.registerUser({name: this.registrationForm.get('fullName').value,
     email: this.registrationForm.get('email').value, 
     password: this.registrationForm.get('password').value}).subscribe(data=>{
       if(data?.status === "success"){
          this.registrationSuccess = true;
          this.registrationMessage = data?.message;
          localStorage.setItem("token",data?.data?.token);
          this.registrationForm.reset();
       }
       else{
         this.registrationFailure = true;
         this.registrationMessage = data?.message
       }
    })
  }

  onClickLogin(){
    this.registerService.loginUser({email: this.loginForm.get('email').value, 
    password: this.loginForm.get('password').value}).subscribe(data=>{
      if(data?.status === "success"){
        localStorage.setItem("token",data?.data?.token)
        localStorage.setItem("name",data?.data?.name)
        this.registerService.userLoggedIn();
        this.router.navigate(["/home"]);
     }
     else{
      this.loginForm.reset();
      this.loginFailure = true;
      this.loginMessage = data?.message
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
