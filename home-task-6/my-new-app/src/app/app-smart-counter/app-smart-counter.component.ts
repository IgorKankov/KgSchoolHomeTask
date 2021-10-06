import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-app-smart-counter',
  templateUrl: './app-smart-counter.component.html',
  styleUrls: ['./app-smart-counter.component.scss']
})
export class AppSmartCounterComponent implements OnInit {

  counterField = new FormControl();
  fieldValue: number;

  constructor() {
    this.fieldValue = 0
  }

  handleCounterChange() {
    this.counterField.valueChanges.subscribe(val => {
      return this.fieldValue = val
    })
  }

  ngOnInit(): void {
    this.handleCounterChange()
  }
}
