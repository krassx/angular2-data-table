import { EventEmitter, QueryList, KeyValueDiffers } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
export declare class OrderableDirective {
    reorder: EventEmitter<any>;
    draggables: QueryList<DraggableDirective>;
    positions: any;
    differ: any;
    constructor(differs: KeyValueDiffers);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateSubscriptions(): void;
    onDragStart(): void;
    onDragEnd({element, model}: {
        element: any;
        model: any;
    }): void;
}
