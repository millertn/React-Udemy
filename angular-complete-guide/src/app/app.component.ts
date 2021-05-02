import { Component } from '@angular/core';

//both of these are valid, obvs external stylesheets are preferred
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // styles: [`
  //   h1 {
  //     color:salmon;
  //   }
  // `]
})
export class AppComponent {
  title = 'angular-complete-guide';
}
