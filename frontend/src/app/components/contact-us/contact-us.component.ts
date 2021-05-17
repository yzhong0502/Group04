import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submitted:boolean;

  constructor(private query:QueryService) { }

  ngOnInit(): void {
  }
  addQuery(f){
    console.log(f.email,f.query);
  
    this.query.sendQuery(f.email,f.query).subscribe((respone:any)=>{
      if(respone.status=="success"){
        this.submitted=true;
      }
    })

    
    }
}
