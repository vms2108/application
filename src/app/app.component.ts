import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';
  move = false;
  size = false;
  info = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };
  elem: any;

  mousedown(event) {
    // const elem = document.querySelector('.block');
      this.elem = event.target;
      this.elem.style.position = 'absolute';
      this.elem.style.cursor = 'pointer';
      this.info = this.elem.getBoundingClientRect();
    // console.log(elem);
      this.text = this.elem.id;
      this.move = true;
   // event.target.getBoundingClientRect().top = 100;
  }
  mouseup(event) {
    this.move = false;
    // event.target.style.top = this.elem.style.top;
    // event.target.style.left = this.elem.style.left;
  }

  mouseout(event) {
    // this.move = false;
  }

  nearEdge(event) {
    // console.log(Math.abs(event.target.getBoundingClientRect().top));
    return Math.abs(event.clientY - event.target.getBoundingClientRect().top) <= 5 ||
    Math.abs(event.clientY - event.target.getBoundingClientRect().bottom) <= 5 ||
    Math.abs(event.clientX - event.target.getBoundingClientRect().left) <= 5 ||
    Math.abs(event.clientX - event.target.getBoundingClientRect().right) <= 5;
  }

  mousemove(event) {
    if (this.nearEdge(event)) {
      this.size = true;
      this.elem = event.target;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  clickout(event) {
    if (this.size) {
      this.elem.style.width = this.info.left - event.clientX;
    } else {
      if (this.move) {
        this.elem.style.top = this.info.top +  event.clientY - (this.info.top + this.info.bottom) / 2 + 'px';
        this.elem.style.left = this.info.left + event.clientX - (this.info.left + this.info.right) / 2 + 'px';
        // console.log('left', this.elem.style.left);
      }
    }
  }
}
