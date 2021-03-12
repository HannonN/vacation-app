import { Component, OnInit } from '@angular/core';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private vacationService: VacationService) {}

  ngOnInit(): void {}
}
