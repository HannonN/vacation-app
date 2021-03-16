import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { secret } from './secrets';

@Injectable({
  providedIn: 'root',
})
export class SygicService {
  sygicApiKey: string = secret.sygicApiKey;
  sygicBaseUrl: string = `https://api.sygictravelapi.com/1.2/en/places/list`;
  // sygicCategoriesUrl: string = `https://api.sygictravelapi.com/1.2/en/places/list?categories=hiking`;

  constructor(private httpClient: HttpClient) {}

  getSygicApiResults = () => {
    return this.httpClient.get(this.sygicBaseUrl, {
      headers: { 'x-api-key': `${this.sygicApiKey}` },
    });
  };

  // getSygicApiCategories = () => {
  //   return this.httpClient.get(this.sygicCategoriesUrl, {
  //     headers: { 'x-api-key': `${this.sygicApiKey}` },
  //     // params: { categories: `${this.sygicCategoriesUrl}` },
  //   });
  // };

  getTrips = (form: NgForm) => {
    let hours = form.form.value.travelTime;
    let radius = 0;
    if (form.form.value.travelType === 'car') {
      radius = hours * 72420;
    } else if (form.form.value.travelType === 'plane') {
      radius = hours * 402336;
    } else if (form.form.value.travelType === 'train') {
      radius = hours * 128748;
    } else if (form.form.value.travelType === 'boat') {
      radius = hours * 41843;
    } else if (form.form.value.travelType === 'bicycle') {
      radius = hours * 27358;
    } else {
      radius = 160934;
    }

    let params: any = {
      radius: radius,
    };
    if (form.form.value.categories) {
      params.categories = form.form.value.categories;
    }
    return this.httpClient.get(`${this.sygicBaseUrl}`, {
      headers: {
        'x-api-key': this.sygicApiKey,
      },
      params: params,
    });
  };
}
