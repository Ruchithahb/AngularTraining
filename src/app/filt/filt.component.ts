import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filt',
  templateUrl: './filt.component.html',
  styleUrls: ['./filt.component.scss']
})
export class FiltComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all: number = 10;
  available: number =6;
  notAvailable: number=4;



}
