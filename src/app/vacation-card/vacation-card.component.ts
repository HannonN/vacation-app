import { Component, Input, OnInit } from '@angular/core';
import { SygicService } from '../sygic.service';

@Component({
  selector: 'app-vacation-card',
  templateUrl: './vacation-card.component.html',
  styleUrls: ['./vacation-card.component.css'],
})
export class VacationCardComponent implements OnInit {
  @Input() tripRef: any; //should this be an array?

  constructor(private sygicService: SygicService) {}

  ngOnInit(): void {}

  // card to be picked, reacting from the method called in the service.
  chosenDestination = () => {
    this.sygicService.pickADestination();
  };
}
