import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {
  firstName: string;
  fullName: string;
  @ViewChild('redParagraph') redParagraph: ElementRef;

  constructor() {
    this.firstName = 'John';
    this.fullName = '';
  }



  ngOnChange(val: string) {
    this.fullName = val
  }

  ngAfterViewInit() {
    this.redParagraph.nativeElement.setAttribute('class', 'simple-paragraph')
    console.log('DIMENSIONS ',this.redParagraph.nativeElement.offsetWidth, this.redParagraph.nativeElement.offsetHeight)
  }
}
