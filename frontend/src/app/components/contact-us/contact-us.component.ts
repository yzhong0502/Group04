import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  email: string = "";
  query: string = "";

  constructor(private service:QueryService) { }

  ngOnInit(): void {
  }
  addQuery(f){
    this.service.sendQuery(f.value.email,f.value.query).subscribe((respone:any)=>{
      if(respone.status=="success"){
        alert("Your query was sent successfully!");
        this.email="";
        this.query="";
      }
    })
  }

}
