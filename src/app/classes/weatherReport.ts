

export class weatherReport{


  weather_id: number;
  weather_main: string;
  weather_description: string;
  weather_icon: string;


  main_temp: number;
  main_feels_like: number;
  main_temp_min: number;
  main_temp_max: number;  
  main_pressure: number;
  main_humidity: number;


  constructor(weather_id: number,
    weather_main: string,
    weather_description: string,
    weather_icon: string,
    main_temp: number,
    main_feels_like: number,
    main_temp_min: number,
    main_temp_max: number,
    main_pressure: number,
    main_humidity: number){

      this.weather_id = weather_id;
      this.weather_main = weather_main;
      this.weather_description = weather_description;
      this.weather_icon = weather_icon;
      this.main_temp = main_temp;
      this.main_feels_like = main_feels_like;
      this.main_temp_min = main_temp_min;
      this.main_temp_min = main_temp_max;
      this.main_pressure = main_pressure;
      this.main_humidity = main_humidity;


    }

}