import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { secret } from './secrets';
import { myTags } from './tags';
@Injectable({
  providedIn: 'root',
})
export class SygicService {
  sygicApiKey: string = secret.sygicApiKey;
  sygicBaseUrl: string = `https://api.sygictravelapi.com/1.2/en/places/list/?limit=1024`;
  // sygicCategoriesUrl: string = `https://api.sygictravelapi.com/1.2/en/places/list?categories=hiking`;
  tags: string[] = myTags;
  tagListString: string = '';
  destinationTags: string[] = [
    'Market',
    'Park',
    'Restaurant',
    'Museums',
    'Hidden Gem',
  ];
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

  //need to convert meters to miles
  // car : 45mph - 72,420 meters per hour -
  // plane : 250mph - 402,336 meters per hour -
  // train : 80mph - 128, 748 meters per hour -
  // boat : 26mph - 41,843 meters per hour -
  // bike : 17mph - 27,358 meters per hour -
  getItemsFromSygic = (obj: any) => {
    let hours = obj.travelTime;
    let radius = 0;
    if (obj.travelType === 'car') {
      radius = hours * 72420;
    } else if (obj.travelType === 'plane') {
      radius = hours * 402336;
    } else if (obj.travelType === 'train') {
      radius = hours * 128748;
    } else if (obj.travelType === 'boat') {
      radius = hours * 41843;
    } else if (obj.travelType === 'bicycle') {
      radius = hours * 27358;
    } else {
      radius = 160934;
    }
    this.makeString(obj.tags);
    let params: any = {
      area: `${obj.lat},${obj.lon},${radius}`,
      tags: this.tagListString,
    };
    console.log(params);
    return this.httpClient.get(`${this.sygicBaseUrl}`, {
      headers: {
        'x-api-key': this.sygicApiKey,
      },
      params: params,
    });
  };
  makeString = (anArray: any) => {
    this.tagListString = anArray.join('|');
  };
  // allow a vacatio to be selected,
  // when selected, send the coords to the service for a repeat
  // endpoint call with the given params.
  // yet to be called correctly in the card.ts
  pickADestination = () => {};

  // destinationResults = (form:NgForm)=>{
  //   obj.lat = ;
  //   obj.lon = ;
  //   let params:any = {
  //     area:`${obj.lat},${obj.lon},20`
  //     tags:
  //   }
  // }
}
