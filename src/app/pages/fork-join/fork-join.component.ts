import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin, of, throwError } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent {
  constructor(private httpClient: HttpClient) {
    forkJoin([of(1), of(1, 2, 3)])
      .subscribe(value => {
        console.log('Primo');
        console.log(value);
      });

    forkJoin({ first: of(1), second: of(1, 2, 3) })
      .subscribe(value => {
        console.log('Secondo');
        console.log(value);
      });

    forkJoin([
      this.httpClient.get('https://dog.ceo/api/breeds/image/random'),
      this.httpClient.get('https://dog.ceo/api/breeds/image/random')
    ]).subscribe(value => {
      console.log('Terzo');
      console.log(value);
    });

    forkJoin([of(), of(1, 2, 3)])
      .subscribe(value => {
        console.log('Quarto');
        console.log(value);
      });

    forkJoin([throwError(() => new Error()), of(1, 2, 3)])
      .subscribe(value => {
        console.log('Quinto');
        console.log(value);
      });
  }
}
