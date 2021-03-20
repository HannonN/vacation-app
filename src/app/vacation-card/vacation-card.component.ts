import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SygicService } from '../sygic.service';

@Component({
  selector: 'app-vacation-card',
  templateUrl: './vacation-card.component.html',
  styleUrls: ['./vacation-card.component.css'],
})
export class VacationCardComponent implements OnInit {
  @Input() tripRef: any; //should this be an array?
  destinationTags: string[] = [
    'Market',
    'Park',
    'Restaurant',
    'Museums',
    'Hidden Gem',
  ];

  constructor(private sygicService: SygicService, private router: Router) {}

  ngOnInit(): void {}

  // the follwoing query params are not being read by the second call for vacation destinations results.
  goAndSetUrl = (coords: any) => {
    this.router.navigate(['/vacation-destination'], {
      queryParams: {
        lat: coords.lat,
        lon: coords.lng,
        radius: 16090,
        limit: 5, // limit is not working at the moment -- Question for Mitch? works in postman...
        tags: this.destinationTags.join('|'),
      },
    });
  };

  // // card to be picked, reacting from the method called in the service.
  // chosenDestination = (coords: any) => {
  //   console.log(coords);
  //   let newObj = {
  //     ...coords,
  //     radius: 32000,
  //     tags: this.destinationTags,
  //   };
  //   this.sygicService.getItemsFromSygic(newObj).subscribe((response) => {});
  // };
}
