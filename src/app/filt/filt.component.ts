import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

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
  
  selectedRadioButtonValue: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }

}
