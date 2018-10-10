import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-items',
  templateUrl: './driver-items.component.html',
  styleUrls: ['./driver-items.component.css'],
  inputs: ['driver']
})
export class DriverItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
