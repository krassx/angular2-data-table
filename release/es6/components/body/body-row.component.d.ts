import { ElementRef, Renderer, EventEmitter } from '@angular/core';
export declare class DataTableBodyRowComponent {
    columns: any[];
    innerWidth: number;
    row: any;
    offsetX: number;
    rowHeight: number;
    isSelected: boolean;
    readonly isEvenRow: boolean;
    readonly isOddRow: boolean;
    activate: EventEmitter<any>;
    element: any;
    columnGroupWidths: any;
    columnsByPin: any;
    _columns: any[];
    _innerWidth: number;
    constructor(element: ElementRef, renderer: Renderer);
    stylesByGroup(group: any): {
        width: string;
    };
    onActivate(event: any, index: any): void;
    onKeyDown(event: any): void;
    recalculateColumns(val?: any[]): void;
    trackByColGroup(index: number, item: any): any;
    trackByColumn(index: number, item: any): any;
}
