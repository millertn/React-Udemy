import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
@Input () location: Place

  constructor(
    private modal:ModalController
  ) { }

  ngOnInit() {}


  onBookPlace() {
    this.modal.dismiss({message:"Dummy Message"}, 'book', 'modal1');
  }

  onCancel() {
    this.modal.dismiss(null, 'cancel', 'modal1');
  }
}
