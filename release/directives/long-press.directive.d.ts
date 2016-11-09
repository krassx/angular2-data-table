import { EventEmitter } from '@angular/core';
export declare class LongPressDirective {
    duration: number;
    longPress: EventEmitter<any>;
    longPressing: EventEmitter<any>;
    longPressEnd: EventEmitter<any>;
    pressing: boolean;
    isLongPressing: boolean;
    timeout: any;
    mouseX: number;
    mouseY: number;
    readonly press: boolean;
    readonly isLongPress: EventEmitter<any>;
    onMouseDown(event: any): void;
    onMouseMove(event: any): void;
    loop(event: any): void;
    endPress(): void;
    onMouseUp(): void;
}
