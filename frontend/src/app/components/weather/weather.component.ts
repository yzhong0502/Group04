import { Component, OnInit } from '@angular/core';


import { WeatherService } from 'src/app/services/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})





export class WeatherComponent implements OnInit {
  public lat;
  public lng;

  WeatherData:any;

  

  
  constructor(private weather : WeatherService) { }

  ngOnInit(): void {
    this.getLocation();

  }


  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
    
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
       

          this.weather.getWeatherByCoords(this.lat,this.lng).subscribe(data =>{
          this.WeatherData = data;
          });
        
      })
    }
  }



}
