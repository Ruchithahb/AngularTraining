import { Component, OnInit , OnChanges,SimpleChanges,DoCheck,AfterViewInit,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit,OnChanges, DoCheck, AfterViewInit, OnDestroy {
  inputData: string = '';
  outputData: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
    // Fetch initial data, perform setup tasks
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    // React to changes in input properties
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    // Implement custom change detection logic
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // Perform tasks after the view has been initialized
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // Cleanup tasks, unsubscribe from observables
    // this.subscription.unsubscribe();
  }

  onButtonClick(): void {
    this.outputData = `Button Clicked! Input Data: ${this.inputData}`;
    // You can perform additional logic here based on the button click
  }
}
  
