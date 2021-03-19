import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SygicService } from '../sygic.service'

@Component({
  selector: 'app-vacation-destination',
  templateUrl: './vacation-destination.component.html',
  styleUrls: ['./vacation-destination.component.css'],
})
export class VacationDestinationComponent implements OnInit {
  @Input() tripRef: any
  trips: any
  constructor(
    private sygicService: SygicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response: any) => {
      this.sygicService
        .getItemsFromSygic(response.params)
        .subscribe((response: any) => {
          this.trips = response.data.places
        })
    })
  }
}
