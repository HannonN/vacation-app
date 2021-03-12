import { Component, OnInit } from '@angular/core';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-vacation-form',
  templateUrl: './vacation-form.component.html',
  styleUrls: ['./vacation-form.component.css'],
})
export class VacationFormComponent implements OnInit {
  constructor(private vacationService: VacationService) {}

  ngOnInit(): void {
    this.getResults();
  }
  getResults = (): void => {
    this.vacationService.getApiResults().subscribe((response: any) => {
      console.log(response);
    });
  };
}
