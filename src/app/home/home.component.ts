import { Component, OnInit } from '@angular/core'
import { VacationService } from '../vacation.service'
import { IDropdownSettings } from 'ng-multiselect-dropdown'

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

  ngOnInit(): void {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
    // onItemSelect(item: any) {
    //   console.log(item);
    // }
    // onSelectAll(items: any) {
    //   console.log(items);
    // }
  }
}
