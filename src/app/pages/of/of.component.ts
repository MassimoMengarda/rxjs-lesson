import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {
  constructor() {
    of(1, 2, 3)
      .subscribe(value => console.log(value));

    of([1, 2, 3])
      .subscribe(value => console.log(value));
  }
}
