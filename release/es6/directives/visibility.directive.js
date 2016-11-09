var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Output, EventEmitter, ElementRef, HostBinding, NgZone } from '@angular/core';
import { checkVisibility } from '../utils';
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibility-observer
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
export let VisibilityDirective = class VisibilityDirective {
    constructor(element, zone) {
        this.isVisible = false;
        this.visible = new EventEmitter();
        checkVisibility(element.nativeElement, this.visbilityChange.bind(this), zone);
    }
    visbilityChange() {
        // trigger zone recalc for columns
        setTimeout(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
};
__decorate([
    HostBinding('class.visible'), 
    __metadata('design:type', Boolean)
], VisibilityDirective.prototype, "isVisible", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], VisibilityDirective.prototype, "visible", void 0);
VisibilityDirective = __decorate([
    Directive({ selector: '[visibility-observer]' }), 
    __metadata('design:paramtypes', [ElementRef, NgZone])
], VisibilityDirective);
//# sourceMappingURL=visibility.directive.js.map