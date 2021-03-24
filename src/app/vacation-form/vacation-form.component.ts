import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SygicService } from '../sygic.service';
import { VacationService } from '../vacation.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { myTags } from '../tags';

@Component({
  selector: 'app-vacation-form',
  templateUrl: './vacation-form.component.html',
  styleUrls: ['./vacation-form.component.css'],
})
export class VacationFormComponent implements OnInit {
  // @Output() userForm: any = new EventEmitter<any>(); //this is dead to us.
  // @Output() selectTags: any = new EventEmitter<any>(); //this is dead to us.
  tagsList: any = [];
  tags: any = myTags;
  selectedItems: any = [];
  searchTerm: string = '';
  position: any;
  constructor(
    private router: Router,
    private vacationService: VacationService,
    private sygicService: SygicService
  ) {}
  ngOnInit(): void {
    this.position = this.vacationService.getLocation();
    if (!this.position) {
      this.vacationService.setLocation();
    }
  }

  filterTags = (searchTerm: string) => {
    if (!searchTerm) {
      return this.tags;
    } else {
      return this.tags.filter((item: string) => {
        return item
          .toLowerCase()
          .trim()
          .includes(searchTerm.toLowerCase().trim());
      });
    }
  };

  onSelect = (event: any) => {
    console.log(event.source.value);
    if (!this.selectedItems.includes(event.source.value)) {
      this.selectedItems.push(event.source.value);
      console.log(this.selectedItems);
    }
  };

  submitTripForm = (form: NgForm) => {
    this.position = this.vacationService.getLocation();
    console.log(this.selectedItems);
    console.log(this.position);
    let obj: any = form.form.value;
    delete obj.someBullshit;
    // this.clean(obj);
    obj.lat = this.position.coords.latitude;
    obj.lon = this.position.coords.longitude;
    obj.tags = this.selectedItems;
    this.router.navigate(['/vacation-result'], {
      queryParams: obj,
    });
  };

  onItemSelect(item: any) {
    console.log(item);
    this.tagsList.push(item);
  }
}
