import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    newsItems:any=[];
  constructor(private query:QueryService) { }

  ngOnInit(): void {
    this.query.news().subscribe((res:any)=>{
      this.newsItems = res.data;
    })
  }

}
