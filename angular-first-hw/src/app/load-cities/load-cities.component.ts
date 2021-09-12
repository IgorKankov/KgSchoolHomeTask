import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-load-cities',
  templateUrl: './load-cities.component.html',
  styleUrls: ['./load-cities.component.scss']
})
export class LoadCitiesComponent implements OnInit {
  cities: any;

  citiesToAdd = [
    {id: 1, name: 'Lviv'},
    {id: 2, name: 'London'},
    {id: 3, name: 'Madrid'},
    {id: 4, name: 'New York'},
    {id: 5, name: 'Krakow'},
  ];

  constructor() {
  }


  showCities() {
    this.cities = this.citiesToAdd
  }

  trackById(index: number, city: any) {
    return city ? city.id : undefined
  }

  ngOnInit(): void {
  }

}
