import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { weatherReport } from './classes/weatherReport';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private _freeApiService: freeApiService){}
  temperature: number;

  rvaWeatherReport: weatherReport;

  ngOnInit() {
    this._freeApiService.getWeatherReport()
    .subscribe(
      data=>{
        // this.rvaWeatherReport = {
        //   weather_id : data.weather.id,
        //   weather_main : data.weather.main,
        //   weather_description : data.weather.description,
        //   weather_icon : data.weather.icon,

        //   main_temp : data.main.temp,
        //   main_feels_like : data.main.feels_like,
        //   main_temp_min : data.main.temp_min,
        //   main_temp_max: data.main.temp_max,
        //   main_pressure : data.main.pressure,
        //   main_humidity : data.main.humidity
        // }

        this.rvaWeatherReport = new weatherReport(
          data.weather[0].id,
          data.weather[0].main,
          data.weather[0].description,
          data.weather[0].icon,
          data.main.temp,
          data.main.feels_like,
          data.main.temp_min,
          data.main.temp_max,
          data.main.pressure,
          data.main.humidity);
        
        // this.temperature = data.main.temp;

      }

    );

  }
}



