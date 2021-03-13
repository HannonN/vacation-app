import { Component, OnInit } from '@angular/core'
import { VacationService } from '../vacation.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userLocation: any = document.getElementById('user-location')
  constructor(private vacationService: VacationService) {}

  ngOnInit(): void {
    this.getLocation()
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition)
    } else {
      this.userLocation.innerHTML =
        'Geolocation is not supported by this browser.'
    }
  }

  showPosition = (position: any) => {
    this.userLocation.innerHTML =
      'Latitude: ' +
      position.coords.latitude +
      '<br>Longitude: ' +
      position.coords.longitude
    console.log('got posistion', position)
  }

  // showPosition = (position: any) => {
  //   this.userLocation.lat = position.coords.latitude
  //   this.userLocation.lon = position.coords.longitude
  //   console.log('got posistion', position.coords)
  // }
}
