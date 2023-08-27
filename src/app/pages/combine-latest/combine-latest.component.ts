import { Component } from '@angular/core';
import { Subject, combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent {
  subject1 = new Subject<number>();
  subject2 = new Subject<number>();

  constructor() {
    combineLatest([of(1), of(2, 3, 4)])
      .subscribe(value => {
        console.log('Primo');
        console.log(value);
      });

    combineLatest([of(1, 2, 3), of(4, 5, 6)])
      .subscribe(value => {
        console.log('Secondo');
        console.log(value);
      });

    combineLatest([of(), of(4, 5, 6)])
      .subscribe(value => {
        console.log('terzo');
        console.log(value);
      });

    combineLatest([
      this.subject1.asObservable(),
      this.subject2.asObservable()
    ]).subscribe(() => console.log('Clicked!'));
  }
}
