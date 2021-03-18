import { Component, OnInit } from '@angular/core';
import { VacationService } from '../vacation.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings:IDropdownSettings
  // userLocation: any = document.getElementById('user-location');
  constructor(private vacationService: VacationService) {}

  ngOnInit(): void {}
}
