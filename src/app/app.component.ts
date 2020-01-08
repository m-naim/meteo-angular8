import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meteoNg';

  _google_api = 'secret';
  public json: string;
  public dataCurrent: any = {
    name: '',
    base: '',
    clouds: { all: 0 },
    coord: { lon: 0, lat: 0 },
    main: { temp: 1, feels_like: 0, temp_min: 0 },
    sys: { country: '' },
    weather: [{}],
    wind: {},
    deg: 0,
    speed: 4,
  };
  public city: string = '';
  public currentCity: string = '';

  public locationUri: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMeteoParis().subscribe(this.subscribeCb);
  }

  randomCity() {
    var cities = [
      'Sydney, AU',
      'Melbourne, AU',
      'Tokyo',
      'Osaka',
      'Seoul',
      'Hong Kong',
      'London',
      'Amsterdam',
      'Berlin',
      'Paris',
      'Barcelona',
      'New York',
      'Dubai',
      'Antarctica'
    ];

    do {
      var random = Math.floor(Math.random() * cities.length);
    } while (cities[random] === this.dataCurrent.name);

    this.apiService.getMeteoBycity(cities[random]).subscribe(this.subscribeCb);
  };

  getCoords() {
    // Use the browser build in geolocation feature
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.apiService
          .getWeatherByCoord(position.coords.latitude, position.coords.longitude)
          .subscribe(this.subscribeCb);

      }
    )

  }

  handelBlur() {
    this.city = this.currentCity;
  }
  handelClick() {
    this.currentCity = this.city;
    this.city = '';
  }

  search() {
    this.apiService.getMeteoBycity(this.city).subscribe(this.subscribeCb);
  }

  //callback
  subscribeCb = (data) => {
    this.json = JSON.stringify(data, null, 2);
    this.dataCurrent = data;
    this.city = this.dataCurrent.name;
    this.currentCity = this.dataCurrent.name;
    let { lon, lat } = this.dataCurrent.coord;
    this.locationUri = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=13&size=537x300&sensor=false&key=${this._google_api}`
  }

}
