var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ElementRef, Renderer, ChangeDetectionStrategy, Input } from '@angular/core';
export let DataTableFooterComponent = class DataTableFooterComponent {
    constructor(element, renderer) {
        this.page = new EventEmitter();
        renderer.setElementClass(element.nativeElement, 'datatable-footer', true);
    }
    get isVisible() {
        return (this.rowCount / this.pageSize) > 1;
    }
    get curPage() {
        return this.offset + 1;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableFooterComponent.prototype, "footerHeight", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableFooterComponent.prototype, "rowCount", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableFooterComponent.prototype, "pageSize", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableFooterComponent.prototype, "offset", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTableFooterComponent.prototype, "pagerLeftArrowIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTableFooterComponent.prototype, "pagerRightArrowIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTableFooterComponent.prototype, "pagerPreviousIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTableFooterComponent.prototype, "pagerNextIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTableFooterComponent.prototype, "totalMessage", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTableFooterComponent.prototype, "page", void 0);
DataTableFooterComponent = __decorate([
    Component({
        selector: 'datatable-footer',
        template: `
    <div
      [style.height.px]="footerHeight">
      <div class="page-count">{{rowCount.toLocaleString()}} {{totalMessage}}</div>
      <datatable-pager
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)">
       </datatable-pager>
     </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [ElementRef, Renderer])
], DataTableFooterComponent);
//# sourceMappingURL=footer.component.js.map