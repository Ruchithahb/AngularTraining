import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subject } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;
  destroy$: Subject<void> = new Subject<void>(); // Now public

  ngOnInit(): void {
    this.counter$ = this.createCounterObservable();
  }

  toggleCounter(): void {
    if (this.destroy$.isStopped) {
      // If stopped, start the counter again
      this.destroy$ = new Subject<void>();
      this.counter$ = this.createCounterObservable();
    } else {
      // If running, stop the counter
      this.destroy$.next();
      this.destroy$.complete();
    }
  }

  private createCounterObservable(): Observable<number> {
    return interval(1000).pipe(
      takeUntil(this.destroy$) // Stop emitting values when the destroy$ subject emits
    );
  }
}
