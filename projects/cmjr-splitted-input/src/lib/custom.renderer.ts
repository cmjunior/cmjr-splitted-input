import { Injectable, PLATFORM_ID, Inject, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
// Based on https://github.com/angular/angular/issues/13818#issuecomment-372276031
// and source code of the old Renderer V1
export class CustomRenderer {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    invokeElementMethod(eleRef: ElementRef, method: string, args: any[]) {
        if (isPlatformBrowser(this.platformId)) {
            let element = eleRef.nativeElement;
            element[method].apply(element, args);
        }
    }
}