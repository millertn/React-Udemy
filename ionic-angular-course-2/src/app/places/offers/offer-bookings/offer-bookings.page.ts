import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place:Place;
  constructor(
    private activeRoute: ActivatedRoute,
    private nav: NavController,
    private places: PlacesService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( paramMap => {
      if(!paramMap.has('placeId')) {
        this.nav.navigateBack('places/tabs/offers');
        return;
      }
      this.place = this.places.getPlace(+paramMap.get('placeId')); 
    });
  }

}
