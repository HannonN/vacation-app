import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation-card',
  templateUrl: './vacation-card.component.html',
  styleUrls: ['./vacation-card.component.css'],
})
export class VacationCardComponent implements OnInit {
  @Input() tripRef: any; //should this be an array?
  trips: any;
  name: any;
  name_suffix: any;
  thumbnail_url: any;
  details: any;

  constructor() {}

  ngOnInit(): void {}

  showTrip = (): void => {};
}
