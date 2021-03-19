import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormGroup, NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { SygicService } from '../sygic.service'
import { VacationService } from '../vacation.service'
import { IDropdownSettings } from 'ng-multiselect-dropdown'
import { myTags } from '../tags'

@Component({
  selector: 'app-vacation-form',
  templateUrl: './vacation-form.component.html',
  styleUrls: ['./vacation-form.component.css'],
})
export class VacationFormComponent implements OnInit {
  @Output() userForm: any = new EventEmitter<any>()
  @Output() selectTags: any = new EventEmitter<any>()
  tagsList: any = []
  dropdownList: any = myTags
  selectedItems: any = []
  dropdownSettings: IDropdownSettings = {}
  position: any
  constructor(
    private router: Router,
    private vacationService: VacationService,
    private sygicService: SygicService
  ) {}
  ngOnInit(): void {
    this.position = this.vacationService.getLocation()
    if (!this.position) {
      this.getAndSetLocation()
    }
    this.selectedItems = []
    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      itemsShowLimit: 5,
      allowSearchFilter: true,
    }
  }
  getAndSetLocation = (): any => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude)
      this.position = position
      this.vacationService.setLocation(position)
    })
  }
  getFormData = (formData: NgForm): void => {
    this.userForm.emit(formData)
    console.log(formData)
  }
  // clean = (obj: any) => {
  //   for (let prop in obj) {
  //     if (!obj[prop]) {
  //       delete obj[prop];
  //     }
  //   }
  //   console.log(obj);
  // };

  submitTripForm = (form: NgForm) => {
    console.log(this.selectedItems)
    let obj: any = form.form.value
    // this.clean(obj);
    obj.lat = this.position.coords.latitude
    obj.lon = this.position.coords.longitude
    obj.tags = this.tagsList
    this.router.navigate(['/vacation-result'], {
      queryParams: obj,
    })
  }

  onItemSelect(item: any) {
    console.log(item)
    this.tagsList.push(item)
  }
  // pythagorean = (sideA: any, sideB: any) => {
  //   let startLat = this.position.coords.latitude
  //   let startLon = this.position.coords.longitude
  //   let tripLat =
  //   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
  //   console.log(this.pythagorean(4, 3))
  // }
}
