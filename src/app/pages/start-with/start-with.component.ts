import { Component } from '@angular/core';
import { Subject, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent {
  private clickSubject = new Subject<string>();
  private click$ = this.clickSubject.asObservable()
    .pipe(startWith('Started'));

  subscribe(): void {
    this.click$.subscribe(event => console.log(event));
  }

  onClick(event: MouseEvent): void {
    this.clickSubject.next(`Button ${event.button} clicked`);
  }
}
