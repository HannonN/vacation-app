import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation-card',
  templateUrl: './vacation-card.component.html',
  styleUrls: ['./vacation-card.component.css'],
})
export class VacationCardComponent implements OnInit {
  @Input() tripRef: any; //should this be an array?

  constructor() {}

  ngOnInit(): void {}

  showTrip = (): void => {};
}
