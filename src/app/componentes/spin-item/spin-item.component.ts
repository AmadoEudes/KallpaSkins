import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-spin-item',
  templateUrl: './spin-item.component.html',
  styleUrls: ['./spin-item.component.css']
})
export class SpinItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular ' + VERSION.major;
  value = 0;

  handleMinus() {
    this.value--;
  }
  handlePlus() {
    this.value++;
  }

}
