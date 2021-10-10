import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppSmartCounterComponent } from './app-smart-counter/app-smart-counter.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ColorConverterComponent } from './color-converter/color-converter.component';
import { HexToRgbPipe } from './hex-to-rgb.pipe';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSmartCounterComponent,
    ColorConverterComponent,
    HexToRgbPipe,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [HexToRgbPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
