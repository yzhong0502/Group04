import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private query:QueryService, private router:Router) { }

  ngOnInit(): void {
  }
  addQuery(f){
    console.log(f.email,f.query);

    this.query.sendQuery(f.email,f.query).subscribe((respone:any)=>{
      if(respone.status==="success"){
        alert("Your query is sent successfully!");
        this.router.navigateByUrl("/home");
      }
    })


  }
}
