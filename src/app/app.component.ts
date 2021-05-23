import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  clickincrease = () => {
   
      this.count += 1;

  };
  clickreset = () => {
    this.count = 0;
  };
  clickdecrease = () => {
    if (this.count > 0) {
      this.count -= 1;
    }
  };
}
