import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-sports-section',
  templateUrl: './sports-section.component.html',
  styleUrls: ['./sports-section.component.css']
})
export class SportsSectionComponent implements OnInit {
  generalItems:any=[];
  sportsItems:any=[];
  showgeneral:boolean=false;
  showsports:boolean=false;
  constructor(private query:QueryService) { }

  ngOnInit(): void {
  }

  firstbutton(){
    this.showgeneral=true;
    this.showsports=false;
    this.query.news().subscribe((res:any)=>{
      res.data.map((d)=>{
        if(d.category=="general"){
          this.generalItems.push(d)
        }
      })
    })
  }
  secondbutton(){
    console.log("came");
    this.showgeneral=false;
    this.showsports=true;
    this.query.news().subscribe((res:any)=>{
      res.data.map((d)=>{
        if(d.category=="sports"){
          this.sportsItems.push(d)
        }
        console.log(this.sportsItems);
      })
    })

  }

}
