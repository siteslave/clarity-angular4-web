import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToThaiDatePipe } from './to-thai-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToThaiDatePipe],
  exports: [ToThaiDatePipe]
})
export class HelperModule { }
