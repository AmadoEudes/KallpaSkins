import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-spin-item',
  templateUrl: './spin-item.component.html',
  styleUrls: ['./spin-item.component.css']
})
export class SpinItemComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  value = 1;

  handleMinus() {
    if(this.value >1){
      this.value--;
    }

  }
  handlePlus() {
    this.value++;
  }

}
