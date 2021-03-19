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
  trips: any
  position: any
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
      this.sygicService
        .getItemsFromSygic(response.params)
        .subscribe((response: any) => {
          this.position = this.vacationService.getLocation()
          this.trips = this.sygicService.fisherShuffle(response.data.places)
          this.trips.forEach((item: any) => {
            let sideA: number = Math.abs(
              item.location.lat - this.position.coords.latitude
            )
            let sideB: number = Math.abs(
              item.location.lng - this.position.coords.longitude
            )
            item.distance = this.sygicService.pythagorean(sideA, sideB)
          })
          console.log(this.trips)
        })
    })
  }
}
