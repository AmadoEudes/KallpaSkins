import { Component, EventEmitter, Input, OnInit, Output, VERSION } from '@angular/core';

@Component({
  selector: 'app-spin-item',
  templateUrl: './spin-item.component.html',
  styleUrls: ['./spin-item.component.css']
})
export class SpinItemComponent implements OnInit {

  @Output() cantidadInfo = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular ' + VERSION.major;
  value: number = 1;

  handleMinus() {
    if(this.value >1){
      this.value--;
    }

  }
  handlePlus() {
    this.value++;
  }

  addNewItem(value: string) {
    this.cantidadInfo.emit(value);
  }
  
}
