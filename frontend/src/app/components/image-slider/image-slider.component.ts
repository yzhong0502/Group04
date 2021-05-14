import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images:any=[];
  constructor(private query:QueryService) { }

  ngOnInit(): void {
    this.query.news().subscribe((res:any)=>{
      res.data.map((image)=>{
        this.images.push(image.imageUrl);
      })
      console.log(this.images)
    })
  }

}
