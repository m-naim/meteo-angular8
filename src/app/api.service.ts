import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    private _apiKey = '279b4be6d54c8bf6ea9b12275a567156';
    private _uri = 'http://api.openweathermap.org/data/2.5/weather'
    constructor(private httpClient: HttpClient) { }

    url = 'http://localhost:4000';

    public getMeteoParis() {
        return this
            .httpClient
            .get(`${this._uri}?q=Paris&APPID=${this._apiKey}`);
    }

    public getMeteoBycity(name: string) {
        return this
            .httpClient
            .get(`${this._uri}?q=${name}&APPID=${this._apiKey}`);
    }

    getWeatherByCoord(lat: number, lon: number) {
        return this
            .httpClient
            .get(`${this._uri}?lat=${Math.round(lat)}&lon=${Math.round(lon)}&APPID=${this._apiKey}`);
    }
}