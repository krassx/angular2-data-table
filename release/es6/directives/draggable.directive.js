var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
export let DraggableDirective = class DraggableDirective {
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new EventEmitter();
        this.dragging = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    onMouseup(event) {
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    onMousedown(event) {
        if (event.target.classList.contains('draggable')) {
            event.preventDefault();
            this.isDragging = true;
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            this.subscription = Observable.fromEvent(document, 'mousemove')
                .subscribe((ev) => this.move(ev, mouseDownPos));
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    move(event, mouseDownPos) {
        if (!this.dragging)
            return;
        const x = event.clientX - mouseDownPos.x;
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = `${x}px`;
        if (this.dragY)
            this.element.style.top = `${y}px`;
        if (this.dragX || this.dragY) {
            this.element.classList.add('dragging');
            this.dragging.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DraggableDirective.prototype, "dragModel", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DraggableDirective.prototype, "dragX", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DraggableDirective.prototype, "dragY", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DraggableDirective.prototype, "dragStart", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DraggableDirective.prototype, "dragging", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DraggableDirective.prototype, "dragEnd", void 0);
__decorate([
    HostListener('document:mouseup', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], DraggableDirective.prototype, "onMouseup", null);
__decorate([
    HostListener('mousedown', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], DraggableDirective.prototype, "onMousedown", null);
DraggableDirective = __decorate([
    Directive({ selector: '[draggable]' }), 
    __metadata('design:paramtypes', [ElementRef])
], DraggableDirective);
//# sourceMappingURL=draggable.directive.js.map