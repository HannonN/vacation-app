import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SygicService } from '../sygic.service';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-vacation-form',
  templateUrl: './vacation-form.component.html',
  styleUrls: ['./vacation-form.component.css'],
})
export class VacationFormComponent implements OnInit {
  @Output() categoryEvent: any = new EventEmitter<string>();
  categories: string[] = [
    'Discovering',
    'Eating',
    'Going Out',
    'Hiking',
    'Playing',
    'Relaxing',
    'Shopping',
    'Sightseeing',
    'Sleeping',
    'Doing Sports',
    'Traveling',
  ];
  lodging: string[] = ['Hotel', 'Campground', 'RV Park'];
  constructor(
    private vacationService: VacationService,
    private sygicService: SygicService
  ) {}

  ngOnInit(): void {
    this.getResults();
    this.getSygicResults();
    // this.selectCategory();
  }
  getResults = (): void => {
    this.vacationService.getApiResults().subscribe((response: any) => {
      console.log(response);
    });
  };

  getSygicResults = (): void => {
    this.sygicService.getSygicApiResults().subscribe((response: any) => {
      console.log(response);
    });
  };

  // startingLocation = ()=>{
  //   return this.getLocation()
  // }

  // selectCategory = () => {
  //   this.sygicService.getSygicApiCategories().subscribe((response) => {
  //     console.dir(response);
  //   });
  // };
}
