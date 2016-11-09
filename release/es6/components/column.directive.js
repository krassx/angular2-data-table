var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, TemplateRef, QueryList, ContentChildren, Input } from '@angular/core';
export let DataTableColumnDirective = class DataTableColumnDirective {
    get hasHeaderTemplate() {
        // this is a tad nasty but can't think of a better way
        // to differate if the prop is header vs cell
        return this.templates.length === 2;
    }
    get headerTemplate() {
        if (!this.hasHeaderTemplate)
            return undefined;
        return this.templates.first;
    }
    get cellTemplate() {
        if (this.hasHeaderTemplate)
            return this.templates.last;
        return this.templates.first;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "name", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "prop", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "frozenLeft", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "frozenRight", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "flexGrow", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "resizeable", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "comparator", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "pipe", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "sortable", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "draggable", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "canAutoResize", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "minWidth", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "width", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableColumnDirective.prototype, "maxWidth", void 0);
__decorate([
    ContentChildren(TemplateRef), 
    __metadata('design:type', QueryList)
], DataTableColumnDirective.prototype, "templates", void 0);
DataTableColumnDirective = __decorate([
    Directive({
        selector: 'datatable-column',
    }), 
    __metadata('design:paramtypes', [])
], DataTableColumnDirective);
//# sourceMappingURL=column.directive.js.map