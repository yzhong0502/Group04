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

  weatherCondition: String;
  weatherIcon: String;
  weatherTemp: String;
  weatherCity:String;
  weatherCountry:String;

  

  
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

          //console.log(this.WeatherData)
          this.weatherCondition= this.WeatherData.weather[0].main;
          this.weatherIcon = "http://openweathermap.org/img/w/"+this.WeatherData.weather[0].icon+".png";
          this.weatherTemp =this.WeatherData.main.temp;
          this.weatherCity = this.WeatherData.name;
          this.weatherCountry = this.WeatherData.sys.country;
          });
        
      })
    }
  }

  



}
