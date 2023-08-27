import { Component } from '@angular/core';
import { BehaviorSubject, Observable, catchError, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent {
  private subject = new BehaviorSubject<number>(0);

  constructor() {
    this.subject.subscribe(value => console.log(`Primo observer: ${value}`));

    this.subject.next(1);
    this.subject.next(2);

    this.subject.subscribe(value => console.log(`Secondo observer: ${value}`));

    this.subject.next(3);
  }

  startInterval(): void {
    const interval$ = interval(1000);
    interval$
      .pipe(
        map(value => {
          if (value == 2) {
            throw new Error('Error');
          }
          return value;
        }),
      )
      .subscribe({
        next: value => console.log(`Interval: ${value}`),
        error: err => console.error(`Errore ricevuto: ${err}`)
      });
  }
}
