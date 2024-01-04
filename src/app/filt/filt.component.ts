import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filt',
  templateUrl: './filt.component.html',
  styleUrls: ['./filt.component.scss']
})
export class FiltComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() all: number = 0;
  @Input() available: number =0;
  @Input() notAvailable: number =0;
  


}
