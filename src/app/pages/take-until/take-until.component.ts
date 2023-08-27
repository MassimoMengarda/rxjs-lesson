import { Component, OnDestroy } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnDestroy {
  private takeUntilSubject = new Subject<void>();

  constructor() {
    interval(1000)
      .pipe(takeUntil(this.takeUntilSubject.asObservable()))
      .subscribe(value => console.log(value));
  }

  ngOnDestroy(): void {
    this.takeUntilSubject.next();
    this.takeUntilSubject.complete();
  }
}
