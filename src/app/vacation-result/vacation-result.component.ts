import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SygicService } from '../sygic.service';

@Component({
  selector: 'app-vacation-result',
  templateUrl: './vacation-result.component.html',
  styleUrls: ['./vacation-result.component.css'],
})
export class VacationResultComponent implements OnInit {
  trips: any;
  constructor(
    private route: ActivatedRoute,
    private sygicService: SygicService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response: any) => {
      console.log(response.params);

      this.getVacationCards(response.params);
    });
  }

  getVacationCards = (obj: any) => {
    this.sygicService.getItemsFromSygic(obj).subscribe((response: any) => {
      console.log(response.data.places);
      this.trips = response.data.places;
    });
  };
}
