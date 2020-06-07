import { CmjrSplittedInputDirective } from './cmjr-splitted-input.directive';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmjrSplittedInputComponent } from './cmjr-splitted-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CmjrSplittedInputComponent,
    CmjrSplittedInputDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CmjrSplittedInputComponent]
})
export class CmjrSplittedInputModule { }
