import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css'],
  inputs: ['driver']
})
export class DriverDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
