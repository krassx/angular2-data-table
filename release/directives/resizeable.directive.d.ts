import { ElementRef, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
export declare class ResizeableDirective {
    resizeEnabled: boolean;
    minWidth: number;
    maxWidth: number;
    resize: EventEmitter<any>;
    element: HTMLElement;
    subscription: Subscription;
    resizing: boolean;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
    onMouseup(event: any): void;
    onMousedown(event: any): void;
    move(event: any, initialWidth: any, mouseDownScreenX: any): void;
}
