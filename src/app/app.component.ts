import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';

  mousedown(event) {
    this.text = event.clientX;
  }
  mouseup() {
    this.text = '';
  }

  mouseout() {
    this.text = '';
  }

  mousemove(event) {
    this.text = event.clientX + ':' + event.clientY + '///' + event.pageX + ':' + event.pageY;
  }
}
