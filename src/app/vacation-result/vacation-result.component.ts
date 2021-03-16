import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SygicService } from '../sygic.service'

@Component({
  selector: 'app-vacation-result',
  templateUrl: './vacation-result.component.html',
  styleUrls: ['./vacation-result.component.css'],
})
export class VacationResultComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sygicService: SygicService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response: any) => {
      console.log(response.params)

      this.sygicService.getItemsFromSygic(response.params).subscribe((data) => {
        console.log(data)
      })
    })
  }
}
