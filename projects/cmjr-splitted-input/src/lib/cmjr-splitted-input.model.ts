import { ElementRef } from '@angular/core';

export interface FieldModel {
    element: ElementRef,
    previous: string,
    next: string
}