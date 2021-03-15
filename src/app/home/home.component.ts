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
    this.getAndSetLocation();
  }

  getAndSetLocation = (): any => {
    this.vacationService.setLocation();
    this.position = this.vacationService.getLocation();
    console.log(this.position);
  };

  // setLocation = ():any=>{
  //   let latitude = position.coords.latitude;
  //   let longitude = position.coords.longtidue;
  //   return this
  // }
}
