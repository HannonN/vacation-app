import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { secret } from './secrets'

@Injectable({
  providedIn: 'root',
})
export class VacationService {
  position: any
  apiKey: string = secret.api_key
  // location: string = '42.3314,-83.0458';
  // radius: string = '1600'; //roughly a mile
  baseUrl: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.3314,-83.0458&radius=200&types=park&key=${this.apiKey}`

  constructor(
    private httpClient: HttpClient // injecting the API
  ) {}

  getApiResults = () => {
    return this.httpClient.get(this.baseUrl, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
  }

  // setLocation = (position: any): void => {
  //   this.position = position
  // }

  getLocation = (): any => {
    return this.position
  }
  setLocation = (): any => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude)
      this.position = position
    })
  }

  // getLodging = (obj: any) => {
  //   return this.httpClient.get(`${this.baseUrl}`, {
  //     params: {
  //       key: this.apiKey,
  //       types: form.form.value.types,
  //     },
  //   })
  // }
}
