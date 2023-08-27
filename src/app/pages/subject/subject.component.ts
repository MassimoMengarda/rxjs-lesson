import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  private clickSource = new Subject<number>();
  click = 0;

  get click$(): Observable<number> {
    return this.clickSource.asObservable();
  }

  onClick(value: number): void {
    this.clickSource.next(value + 1);
  }

  subscribe(): void {
    this.click$.subscribe(value => this.click = value);
  }
}
