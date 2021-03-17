import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SygicService } from '../sygic.service';
import { VacationService } from '../vacation.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-vacation-form',
  templateUrl: './vacation-form.component.html',
  styleUrls: ['./vacation-form.component.css'],
})
export class VacationFormComponent implements OnInit {
  @Output() userForm: any = new EventEmitter<any>();
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  categories: string[] = [
    'Discovering',
    'eating',
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
  noNoCategories: string[] = [
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
  position: any;

  constructor(
    private router: Router,
    private vacationService: VacationService,
    private sygicService: SygicService
  ) {}

  ngOnInit(): void {
    // this.getResults()
    // this.getSygicResults()
    this.position = this.vacationService.getLocation();
    if (!this.position) {
      this.getAndSetLocation();
    }
    this.dropdownList = [];
  }

  getAndSetLocation = (): any => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      this.position = position;
      this.vacationService.setLocation(position);
    });
  };

  getFormData = (formData: NgForm): void => {
    this.userForm.emit(formData);
    console.log(formData);
  };

  //need to convert meters to miles
  // car : 45mph - 72,420 meters per hour -
  // plane : 250mph - 402,336 meters per hour -
  // train : 80mph - 128, 748 meters per hour -
  // boat : 26mph - 41,843 meters per hour -
  // bike : 17mph - 27,358 meters per hour -
  clean = (obj: any) => {
    for (let prop in obj) {
      if (!obj[prop]) {
        delete obj[prop];
      }
    }
    console.log(obj);
  };

  submitTripForm = (form: NgForm) => {
    let obj: any = form.form.value;
    this.clean(obj);
    obj.lat = this.position.coords.latitude;
    obj.lon = this.position.coords.longitude;

    this.router.navigate(['/vacation-result'], {
      queryParams: obj,
    });
  };
}
