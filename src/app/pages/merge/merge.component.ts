import { Component } from '@angular/core';
import { Subject, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent {
  subject1 = new Subject<number>();
  subject2 = new Subject<number>();

  constructor() {
    merge(
      this.subject1.asObservable(),
      this.subject2.asObservable()
    ).subscribe(() => console.log('Clicked!'));
  }
}
