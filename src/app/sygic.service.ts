import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NgForm } from '@angular/forms'
import { secret } from './secrets'

@Injectable({
  providedIn: 'root',
})
export class SygicService {
  sygicApiKey: string = secret.sygicApiKey
  sygicBaseUrl: string = `https://api.sygictravelapi.com/1.2/en/places/list`
  // sygicCategoriesUrl: string = `https://api.sygictravelapi.com/1.2/en/places/list?categories=hiking`;

  constructor(private httpClient: HttpClient) {}

  getSygicApiResults = () => {
    return this.httpClient.get(this.sygicBaseUrl, {
      headers: { 'x-api-key': `${this.sygicApiKey}` },
    })
  }

  // getSygicApiCategories = () => {
  //   return this.httpClient.get(this.sygicCategoriesUrl, {
  //     headers: { 'x-api-key': `${this.sygicApiKey}` },
  //     // params: { categories: `${this.sygicCategoriesUrl}` },
  //   });
  // };

  getItemsFromSygic = (obj: any) => {
    let hours = obj.travelTime
    let radius = 0
    if (obj.travelType === 'car') {
      radius = hours * 72420
    } else if (obj.travelType === 'plane') {
      radius = hours * 402336
    } else if (obj.travelType === 'train') {
      radius = hours * 128748
    } else if (obj.travelType === 'boat') {
      radius = hours * 41843
    } else if (obj.travelType === 'bicycle') {
      radius = hours * 27358
    } else {
      radius = 160934
    }
    let params: any = {
      area: `${obj.lat},${obj.lon},${radius}`,
    }
    return this.httpClient.get(`${this.sygicBaseUrl}`, {
      headers: {
        'x-api-key': this.sygicApiKey,
      },
      params: params,
    })
  }
}
