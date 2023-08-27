import { Component } from '@angular/core';
import { Subject, startWith, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent {
  private source = new Subject<number>();
  private other = new Subject<number>();

  source$ = this.source.asObservable().pipe(startWith(0));
  other$ = this.other.asObservable().pipe(startWith(0));

  constructor() {
    this.source.asObservable()
      .pipe(withLatestFrom(this.other.asObservable()))
      .subscribe(value => console.log(value));
  }

  emitSource(value: number): void {
    this.source.next(value);
  }

  emitOther(value: number): void {
    this.other.next(value);
  }
}
