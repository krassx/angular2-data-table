var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Output, EventEmitter, ContentChildren, QueryList, KeyValueDiffers } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
export let OrderableDirective = class OrderableDirective {
    constructor(differs) {
        this.reorder = new EventEmitter();
        this.differ = differs.find({}).create(null);
    }
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    ngOnDestroy() {
        this.draggables.forEach(d => {
            d.dragStart.unsubscribe();
            d.dragEnd.unsubscribe();
        });
    }
    updateSubscriptions() {
        const diffs = this.differ.diff(this.draggables.toArray());
        if (diffs) {
            const subscribe = ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            };
            const unsubscribe = ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            };
            diffs.forEachAddedItem(subscribe.bind(this));
            diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe.bind(this));
        }
    }
    onDragStart() {
        this.positions = {};
        let i = 0;
        for (let dragger of this.draggables.toArray()) {
            let elm = dragger.element;
            this.positions[dragger.dragModel.prop] = {
                left: parseInt(elm.offsetLeft.toString(), 0),
                index: i++
            };
        }
    }
    onDragEnd({ element, model }) {
        const newPos = parseInt(element.offsetLeft.toString(), 0);
        const prevPos = this.positions[model.prop];
        let i = 0;
        for (let prop in this.positions) {
            let pos = this.positions[prop];
            let movedLeft = newPos < pos.left && prevPos.left > pos.left;
            let movedRight = newPos > pos.left && prevPos.left < pos.left;
            if (movedLeft || movedRight) {
                this.reorder.emit({
                    prevIndex: prevPos.index,
                    newIndex: i,
                    model
                });
            }
            i++;
        }
        element.style.left = 'auto';
    }
};
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], OrderableDirective.prototype, "reorder", void 0);
__decorate([
    ContentChildren(DraggableDirective, { descendants: true }), 
    __metadata('design:type', QueryList)
], OrderableDirective.prototype, "draggables", void 0);
OrderableDirective = __decorate([
    Directive({ selector: '[orderable]' }), 
    __metadata('design:paramtypes', [KeyValueDiffers])
], OrderableDirective);
//# sourceMappingURL=orderable.directive.js.map