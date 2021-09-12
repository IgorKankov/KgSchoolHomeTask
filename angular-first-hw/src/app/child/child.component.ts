import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() firstName: string;
  @Output() getFullName = new EventEmitter<string>();
  lastName: string;

  constructor() {
    this.firstName = "";
    this.lastName = "";
  }

  getLastName() {
    this.lastName = 'Doe';
    this.getFullName.emit(`${this.firstName} ${this.lastName}`)
  }

  ngOnInit(): void {
  }

}
