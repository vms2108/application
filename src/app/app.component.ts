import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';
  move = false;
  info = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };
  elem: Element;

  mousedown(event) {
    // const elem = document.querySelector('.block');
    this.elem = event.target;
    this.elem.style.position = 'relative';
    this.elem.style.cursor = 'pointer';
    this.info = this.elem.getBoundingClientRect();
    // console.log(elem);
    this.text = event.clientX;
    this.move = true;
   // event.target.getBoundingClientRect().top = 100;
  }
  mouseup(event) {
    this.move = false;
    event.target.style.top = this.elem.style.top;
    event.target.style.left = this.elem.style.left;
  }

  mouseout(event) {
    this.move = false;
  }

  mousemove(event) {
  }

  @HostListener('document:mousemove', ['$event'])
  clickout(event) {
    if (this.move) {
      this.text = 'I am here';
      this.elem.style.top =  event.clientY - this.info.top + 'px';
      this.elem.style.left =  event.clientX - this.info.left + 'px';
    }
  }
}
