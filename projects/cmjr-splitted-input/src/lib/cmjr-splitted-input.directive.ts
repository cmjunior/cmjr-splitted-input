import { FieldModel } from './cmjr-splitted-input.model';
import { Directive, AfterViewInit, Input, Output, EventEmitter, ElementRef } from "@angular/core";

@Directive({
    selector: '[cmjr-digit]'
})
export class CmjrSplittedInputDirective implements AfterViewInit {
    @Input() previous: string
    @Input() next: string
    @Output() elementCreated = new EventEmitter<FieldModel>()

    constructor(private _elementRef: ElementRef) { }

    ngAfterViewInit(): void {
        this.elementCreated.emit({element: this._elementRef, previous: this.previous, next: this.next})
    }

}