import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url ='https://api.openweathermap.org/data/2.5/weather';
  apiKey ="86c3acfd5540a3321e346cdf838ffeb3";

  constructor(private http: HttpClient) { }

  getWeatherByCoords(lat,lon){
    let params = new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('units','metric')
    .set('appid',this.apiKey)

    return this.http.get(this.url,{params});
  }
}
