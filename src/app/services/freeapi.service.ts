import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class freeApiService{

  constructor(private httpclient:HttpClient){}

  getWeatherReport():Observable<any> {
    return this.httpclient.get('http://api.openweathermap.org/data/2.5/weather?id=4781756&APPID=4fafd909b4c3edc9c343e92d02d5ef9a&units=Imperial');
  }

}