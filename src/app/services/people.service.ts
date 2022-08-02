import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {

    let peopleArray = [
      {
        firstname: 'Gustavo',
        lastName: 'Pereira',
        age: 26
      },
      {
        firstname: 'Stephany',
        lastName: 'Ponciano',
        age: 27
      },
      {
        firstname: 'Teodoro',
        lastName: 'Silva',
        age: 4
      },
    ];

    return of(peopleArray);
  }

}
