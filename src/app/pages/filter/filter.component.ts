import { Component } from '@angular/core';
import { filter, of, tap } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor() {
    of(0, 1, 2, 3, 4)
      .pipe(
        tap(value => console.log(`primo tap ${value}`)),
        filter(value => value % 2 == 1),
        tap(value => console.log(`secondo tap ${value}`)),
      )
      .subscribe();
  }
}
