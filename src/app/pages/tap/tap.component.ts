import { Component } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  constructor() {
    of(1)
      .pipe(tap(value => console.log(`tap ${value}`)))
      .subscribe(value => console.log(`subscribe ${value}`));
  }
}
