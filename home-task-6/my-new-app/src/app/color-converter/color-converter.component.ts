import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HexToRgbPipe} from "../hex-to-rgb.pipe"

@Component({
  selector: 'app-color-converter',
  templateUrl: './color-converter.component.html',
  styleUrls: ['./color-converter.component.scss']
})
export class ColorConverterComponent implements OnInit {

  hexInput = new FormControl();
  colorOutput: any;

  constructor(private convertColor: HexToRgbPipe) {
    this.colorOutput = ''
  }

  handleColorConvert(){


    this.hexInput.valueChanges.subscribe(val => {
      return this.colorOutput = this.convertColor.transform(val);
    })

  }

  ngOnInit(): void {
    this.handleColorConvert()
  }
}
