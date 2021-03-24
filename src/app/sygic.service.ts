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
  sygicBaseUrl: string = `https://api.sygictravelapi.com/1.2/en/places/list`;
  // sygicCategoriesUrl: string = `https://api.sygictravelapi.com/1.2/en/places/list?categories=hiking`;
  tags: string[] = myTags;
  tagListString: string = '';

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
    let radius = 0;
    if (obj.travelType) {
      this.makeString(obj.tags);
      let hours = obj.travelTime;
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
    } else {
      this.tagListString = obj.tags;
      radius = obj.radius;
    }
    let params: any = {
      area: `${obj.lat},${obj.lon},${radius}`,
      tags: this.tagListString,
      limit: 1024,
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
  pythagorean = (sideA: any, sideB: any) => {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  };

  fisherShuffle = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
  };
  deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };
  getDistanceFromLatLonInMiles = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    let R = 6371; // Radius of the earth in km
    let dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    let dLon = this.deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    let dInMiles = (d * 0.621371).toFixed(2);

    return parseFloat(dInMiles);
  };
}
