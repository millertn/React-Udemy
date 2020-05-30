import {Component, OnInit, OnDestroy} from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';
// import { pseudoRandomBytes } from 'crypto';
@Component ({
  selector:'app-persons',
  templateUrl:'./persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isFetching = false;
  private personListener: Subscription;
  // private personService: PersonsService

  constructor(
    //adding private skips the initial assignments that are commented out
    private pService:PersonsService
  ) {
    // this.personService = pService;

    //not recommended,best to use ngOnInit
    // this.personList = pService.persons;
  }

  //initialization lifecycle hook
  ngOnInit() {
    this.personListener = this.pService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.pService.fetchPersons();
  }

  onRemovePerson(name: string) {
    this.pService.removePerson(name);
  }

  ngOnDestroy () {
    this.personListener.unsubscribe();
  }
}
