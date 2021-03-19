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
  constructor(
    private sygicService: SygicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response: any) => {
      this.sygicService
        .getItemsFromSygic(response.params)
        .subscribe((response) => {
          console.log(response)
        })
    })
  }
}
