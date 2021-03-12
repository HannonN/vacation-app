import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { secret } from './secrets';

@Injectable({
  providedIn: 'root',
})
export class VacationService {
  apiKey: string = secret.api_key;
  // location: string = '42.3314,-83.0458';
  // radius: string = '1600'; //roughly a mile
  // baseUrl: string =
  //   'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  baseUrl: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.3314,-83.0458&radius=200&types=park&key=${this.apiKey}`;

  constructor(
    private httpClient: HttpClient // injecting the API
  ) {}

  getApiResults = () => {
    return this.httpClient.get(this.baseUrl, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  };
}
