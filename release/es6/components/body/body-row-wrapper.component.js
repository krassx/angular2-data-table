var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Renderer, ElementRef, ChangeDetectionStrategy } from '@angular/core';
export let DataTableRowWrapperComponent = class DataTableRowWrapperComponent {
    constructor(element, renderer) {
        this.expanded = false;
        renderer.setElementClass(element.nativeElement, 'datatable-row-wrapper', true);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableRowWrapperComponent.prototype, "rowDetailTemplate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableRowWrapperComponent.prototype, "detailRowHeight", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DataTableRowWrapperComponent.prototype, "expanded", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableRowWrapperComponent.prototype, "row", void 0);
DataTableRowWrapperComponent = __decorate([
    Component({
        selector: 'datatable-row-wrapper',
        template: `
    <ng-content></ng-content>
    <div 
      *ngIf="expanded"
      [style.height.px]="detailRowHeight" 
      class="datatable-row-detail">
      <template
        *ngIf="rowDetailTemplate"
        [ngTemplateOutlet]="rowDetailTemplate"
        [ngOutletContext]="{ row: row }">
      </template>
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [ElementRef, Renderer])
], DataTableRowWrapperComponent);
//# sourceMappingURL=body-row-wrapper.component.js.map