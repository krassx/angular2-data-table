var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
export let LongPressDirective = class LongPressDirective {
    constructor() {
        this.duration = 500;
        this.longPress = new EventEmitter();
        this.longPressing = new EventEmitter();
        this.longPressEnd = new EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get press() { return this.pressing; }
    get isLongPress() { return this.longPressing; }
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1)
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        this.timeout = setTimeout(() => {
            this.isLongPressing = true;
            this.longPress.emit(event);
            this.loop(event);
        }, this.duration);
        this.loop(event);
    }
    onMouseMove(event) {
        if (this.pressing && !this.longPressing) {
            const xThres = (event.clientX - this.mouseX) > 10;
            const yThres = (event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    loop(event) {
        if (this.longPressing) {
            this.timeout = setTimeout(() => {
                this.longPressing.emit(event);
                this.loop(event);
            }, 50);
        }
    }
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this.longPressEnd.emit(true);
    }
    onMouseUp() { this.endPress(); }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], LongPressDirective.prototype, "duration", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], LongPressDirective.prototype, "longPress", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], LongPressDirective.prototype, "longPressing", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], LongPressDirective.prototype, "longPressEnd", void 0);
__decorate([
    HostBinding('class.press'), 
    __metadata('design:type', Object)
], LongPressDirective.prototype, "press", null);
__decorate([
    HostBinding('class.longpress'), 
    __metadata('design:type', Object)
], LongPressDirective.prototype, "isLongPress", null);
__decorate([
    HostListener('mousedown', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], LongPressDirective.prototype, "onMouseDown", null);
__decorate([
    HostListener('mousemove', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], LongPressDirective.prototype, "onMouseMove", null);
__decorate([
    HostListener('mouseup'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], LongPressDirective.prototype, "onMouseUp", null);
LongPressDirective = __decorate([
    Directive({ selector: '[long-press]' }), 
    __metadata('design:paramtypes', [])
], LongPressDirective);
//# sourceMappingURL=long-press.directive.js.map