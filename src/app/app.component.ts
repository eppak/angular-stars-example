import { Component } from '@angular/core';
import { faStar as full, faStarHalfAlt as half } from '@fortawesome/free-solid-svg-icons';
import { faStar as empty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private timer = null;
  public alert: boolean = false;
  public value: number = 0;
  public stars: Array<any> = [ empty, empty, empty, empty, empty ];

  constructor() {
    this.render();
  }

  public render(alert: boolean = false) {    
    let index = 0;

    this.fader(alert);

    this.stars.forEach(star => {

      if (index < this.value) {
        this.stars[index] = full;
        index++;
        return;
      }

      this.stars[index] = empty;
      index++;
    });
  }

  private fader(alert: boolean) {
    this.alert = alert;
    this.timer = setTimeout(() => {
      this.alert = false;
    }, 1000);
  }

  public hide() {
    this.alert = false;
  }

  public set(i) {
    this.value = i + 1;
    this.render(true);
  }
}
