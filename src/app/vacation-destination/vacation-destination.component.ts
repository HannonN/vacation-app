import { isNgTemplate } from '@angular/compiler'
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SygicService } from '../sygic.service'
import { VacationService } from '../vacation.service'

@Component({
  selector: 'app-vacation-destination',
  templateUrl: './vacation-destination.component.html',
  styleUrls: ['./vacation-destination.component.css'],
})
export class VacationDestinationComponent implements OnInit {
  @Input() tripRef: any
  trips: any = []
  position: any
  sortBy: string = ''
  constructor(
    private vacationService: VacationService,
    private sygicService: SygicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.position = this.vacationService.getLocation()
    if (!this.position) {
      this.vacationService.setLocation()
    }
    this.route.queryParamMap.subscribe((response: any) => {
      let destinationLocationObj: any = response.params
      console.log(destinationLocationObj)

      this.sygicService
        .getItemsFromSygic(response.params)
        .subscribe((response: any) => {
          this.position = this.vacationService.getLocation()

          this.trips = response.data.places
          this.sygicService.fisherShuffle(this.trips)
          this.trips.forEach((item: any) => {
            item.distance = this.sygicService.getDistanceFromLatLonInMiles(
              destinationLocationObj.lat,
              destinationLocationObj.lon,
              item.location.lat,
              item.location.lng
            )
          })
          this.trips = this.trips.filter((item: any) => {
            return item.perex && item.thumbnail_url
          })
          this.trips = this.trips.slice(0, 20)
          console.log(this.trips)
        })
    })
  }

  sortByDistance = (sortBy: string) => {
    let newArray: any = []
    if (sortBy === '') {
      console.log('no sort')
      return this.trips
    } else if (sortBy === 'ascending') {
      console.log('ascending')

      newArray = this.trips.sort((firstEl: any, secondEl: any) => {
        if (firstEl.distance < secondEl.distance) {
          return -1
        } else if (firstEl.distance > secondEl.distance) {
          return 1
        } else {
          return 0
        }
      })
      console.log(newArray)

      return newArray
    } else if (sortBy === 'descending') {
      console.log('descending')
      newArray = this.trips.sort((firstEl: any, secondEl: any) => {
        if (firstEl.distance > secondEl.distance) {
          return -1
        } else if (firstEl.distance < secondEl.distance) {
          return 1
        } else {
          return 0
        }
      })
      console.log(newArray)
      return newArray
    }
    console.log(newArray)
  }

  setSort = (sortTerm: string) => {
    this.sortBy = sortTerm
  }
}
