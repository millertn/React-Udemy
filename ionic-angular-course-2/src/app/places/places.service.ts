import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      1,
      "Johnson City Apt",
      "Living it large in JC",
      "https://www.tricitiesapartmentguide.com/apartment-image/Gibson-Ridgegzexvpkw.2y0.jpg",
      100
    ),
    new Place(
      2,
      "Persian Mansion",
      "Living it *real* large in JC",
      "https://thumbs.dreamstime.com/z/kashan-iran-october-splendor-tabatabaei-house-famous-city-landmark-unique-architectural-design-persian-mansion-125990771.jpg",
      250
    ),
    new Place(
      3,
      "My Closet",
      "Srry, need money",
      "https://i.pinimg.com/originals/0d/44/f7/0d44f73d188a3cd53a3325f7c8dce0b0.jpg",
      29.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id:number) {
    return {...this._places.find(p => p.id === id)}
  }

  constructor() {}
}
