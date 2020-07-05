import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  public place: Place;

  constructor(
    private router: Router,
    private nav: NavController,
    private places: PlacesService,
    private activeRoute: ActivatedRoute,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
        if (!paramMap.has('placeId')) {
          this.nav.navigateBack('places/tabs/offers');
        }
        this.place = this.places.getPlace(+paramMap.get('placeId'));
    });
  }

  onBookPlace () {
      // this.nav.navigateBack('/places/tabs/discover');
      //unreliable, don't use if you can't guarantee there will be a stack of pages to pop off of
      // this.nav.pop();
      // this.router.navigateByUrl('/places/tabs/discover');
    this.modalController.create({
      component:CreateBookingComponent,
      componentProps: {location: this.place},
      id:"modal1"
    }).then( modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss()
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role == 'book') {
        console.log("BOOKED");
      }
    })

  }

}
