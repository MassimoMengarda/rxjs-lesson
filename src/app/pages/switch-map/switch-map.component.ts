import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('https://dog.ceo/api/breeds/list/all')
      .pipe(
        map((res: any) => this.getBreeds(res.message)),
        switchMap((breeds: string[]) => {
          const random = Math.floor(Math.random() * breeds.length);
          return this.httpClient.get(`https://dog.ceo/api/breed/${breeds[random]}/images/random`);
        })
      ).subscribe(res => console.log(res));
  }

  private getBreeds(message: any): string[] {
    const result = [];
    for (const key in message) {
      if (message[key].length == 0) {
        result.push(key);
        continue;
      }

      for (const subKey in message[key]) {
        result.push(`${key}/${message[key][subKey]}`);
      }
    }

    return result;
  }
}
