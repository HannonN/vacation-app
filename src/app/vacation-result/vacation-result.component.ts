import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SygicService } from '../sygic.service';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-vacation-result',
  templateUrl: './vacation-result.component.html',
  styleUrls: ['./vacation-result.component.css'],
})
export class VacationResultComponent implements OnInit {
  trips: any;
  position: any;
  sortByResult: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sygicService: SygicService,
    private vacationService: VacationService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response: any) => {
      console.log(response.params);

      this.getVacationCards(response.params);
    });
    //-----------------------------------------
    this.position = this.vacationService.getLocation();
    if (!this.position) {
      this.vacationService.setLocation();
    }
    this.route.queryParamMap.subscribe((response: any) => {
      let destinationLocationObj: any = response.params;
      console.log(destinationLocationObj);

      this.sygicService
        .getItemsFromSygic(response.params)
        .subscribe((response: any) => {
          this.position = this.vacationService.getLocation();

          this.trips = response.data.places;
          this.sygicService.fisherShuffle(this.trips);
          this.trips.forEach((item: any) => {
            item.distance = this.sygicService.getDistanceFromLatLonInMiles(
              this.position.coords.latitude,
              this.position.coords.longitude,
              item.location.lat,
              item.location.lng
            );
          });
          this.trips = this.trips.filter((item: any) => {
            return item.perex && item.thumbnail_url;
          });
        });
    });
  }

  getVacationCards = (obj: any) => {
    this.sygicService.getItemsFromSygic(obj).subscribe((response: any) => {
      console.log(response.data.places);
      this.trips = response.data.places;
    });
  };

  sortByDistanceResults = (sortBy: string) => {
    let newArray: any = [];
    if (sortBy === 'ascending') {
      console.log('ascending');

      newArray = this.trips.sort((firstEl: any, secondEl: any) => {
        if (firstEl.distance < secondEl.distance) {
          return -1;
        } else if (firstEl.distance > secondEl.distance) {
          return 1;
        } else {
          return 0;
        }
      });
      console.log(newArray);

      return newArray;
    } else if (sortBy === 'descending') {
      console.log('descending');
      newArray = this.trips.sort((firstEl: any, secondEl: any) => {
        if (firstEl.distance > secondEl.distance) {
          return -1;
        } else if (firstEl.distance < secondEl.distance) {
          return 1;
        } else {
          return 0;
        }
      });
      console.log(newArray);
      return newArray;
    }
    console.log(newArray);
  };

  setSortResults = (sortTerm: string) => {
    this.sortByResult = sortTerm;
  };
}
