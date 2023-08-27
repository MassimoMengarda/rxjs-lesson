import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval, of, tap } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnDestroy {
  private subscription = interval(1000)
    .subscribe({
      next: value => console.log(`Subscribe ${value}`),
      error: err => console.error(err),
      complete: () => console.log('interval done')
    });

  interval$ = interval(1000)
    .pipe(tap(value => console.log(`| async ${value}`)));

  constructor(private httpClient: HttpClient) {
    const observable = of(1, 2, 3);
    observable
      .subscribe({
        next: value => console.log(value),
        error: err => console.error(err),
        complete: () => console.log('of done')
      });

    this.httpClient.get('https://dog.ceo/api/breeds/image/random')
      .subscribe({
        next: value => console.log(value),
        error: err => console.error(err),
        complete: () => console.log('http done')
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
