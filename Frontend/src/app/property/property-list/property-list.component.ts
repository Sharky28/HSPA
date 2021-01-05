import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Array<any> = [{
    "Id":1,
    "Name":"Birla house",
    "Type":"House",
    "Price": 12000
  },
  {
    "Id":2,
    "Name":"Erose villa",
    "Type":"House",
    "Price": 14000
  },
  {
    "Id":3,
    "Name":"Penbrook estate",
    "Type":"House",
    "Price": 22000
  },
  {
    "Id":4,
    "Name":"Chathom house",
    "Type":"House",
    "Price": 40000
  },
  {
    "Id":5,
    "Name":"Ugas manner",
    "Type":"House",
    "Price": 92000
  },
  {
    "Id":6,
    "Name":"Pearl white house",
    "Type":"House",
    "Price": 18000
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
