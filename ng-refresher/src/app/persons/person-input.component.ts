import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector:'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  // @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';

  constructor(
    private pService: PersonsService
  ) {}

  onCreatePerson() {
    console.log('person made: ' + this.enteredPersonName);
    this.pService.addPerson(this.enteredPersonName);
    // this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }

}
