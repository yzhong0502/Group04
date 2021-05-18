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
  showsports:boolean=true;
  option = "";
  constructor(private query:QueryService) { }

  ngOnInit(): void {
    this.secondbutton();
  }

  firstbutton(){
    this.showgeneral=true;
    this.showsports=false;
    this.option = "General";
    this.query.news().subscribe((res:any)=>{
      res.data.map((d)=>{
        if(d.category!="sports"){
          this.generalItems.push(d)
        }
      })
    })
  }
  secondbutton(){
    console.log("sports");
    this.showgeneral=false;
    this.showsports=true;
    this.option = "Sports";
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
