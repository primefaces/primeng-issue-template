import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  counter = 0;

  onClick() {
    this.counter++;
  }
}
