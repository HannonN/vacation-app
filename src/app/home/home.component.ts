import { Component, OnInit } from '@angular/core';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  position: any;
  // userLocation: any = document.getElementById('user-location');
  constructor(private vacationService: VacationService) {}

  ngOnInit(): void {
    // this.position = this.vacationService.getLocation()
    // if (!this.position) {
    //   this.getAndSetLocation()
    // }
  }

  // getAndSetLocation = (): any => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position.coords.latitude, position.coords.longitude)
  //     this.position = position
  //     this.vacationService.setLocation(position)
  //   })
  // }

  // setLocation = ():any=>{
  //   let latitude = position.coords.latitude;
  //   let longitude = position.coords.longtidue;
  //   return this
  // }
}
