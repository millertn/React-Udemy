import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// or add PersonsService into the providers, this is not recommended
@Injectable({providedIn: 'root'})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  persons: string[];

  constructor(
    private http:HttpClient
  ) {}

  fetchPersons() {
    this.http.get<any>('https://swapi.dev/api/people')
    .pipe(map(data => {
      return data.results.map(character => character.name);
    }))
    .subscribe(filteredData => {
      this.personsChanged.next(filteredData);
    });
  }

  addPerson(name:string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }
}
