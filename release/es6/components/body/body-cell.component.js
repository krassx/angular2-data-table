var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, Output, EventEmitter, HostListener, ElementRef, Renderer, ChangeDetectionStrategy } from '@angular/core';
import { deepValueGetter, Keys } from '../../utils';
import { SortDirection } from '../../types';
export let DataTableBodyCellComponent = class DataTableBodyCellComponent {
    constructor(element, renderer) {
        this.activate = new EventEmitter();
        this.isFocused = false;
        this.element = element.nativeElement;
        renderer.setElementClass(this.element, 'datatable-body-cell', true);
    }
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    get sorts() {
        return this._sorts;
    }
    get isSortActive() {
        return !this.sortDir;
    }
    get isSortAscending() {
        return this.sortDir === SortDirection.asc;
    }
    get isSortDescending() {
        return this.sortDir === SortDirection.desc;
    }
    get width() {
        return this.column.width;
    }
    get height() {
        const height = this.rowHeight;
        if (isNaN(height))
            return height;
        return height + 'px';
    }
    get value() {
        if (!this.row || !this.column)
            return '';
        const prop = deepValueGetter(this.row, this.column.prop);
        const userPipe = this.column.pipe;
        return userPipe ? userPipe.transform(prop) : prop;
    }
    onFocus(event) {
        this.isFocused = true;
    }
    onBlur(event) {
        this.isFocused = false;
    }
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            column: this.column,
            value: this.value,
            cellElement: this.element
        });
    }
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            column: this.column,
            value: this.value,
            cellElement: this.element
        });
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetCell = event.target === this.element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                column: this.column,
                value: this.value,
                cellElement: this.element
            });
        }
    }
    calcSortDir(sorts) {
        if (!sorts)
            return;
        const sort = sorts.find(s => {
            return s.prop === this.column.prop;
        });
        if (sort)
            return sort.dir;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableBodyCellComponent.prototype, "row", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableBodyCellComponent.prototype, "column", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableBodyCellComponent.prototype, "rowHeight", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array), 
    __metadata('design:paramtypes', [Array])
], DataTableBodyCellComponent.prototype, "sorts", null);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTableBodyCellComponent.prototype, "activate", void 0);
__decorate([
    HostBinding('class.active'), 
    __metadata('design:type', Boolean)
], DataTableBodyCellComponent.prototype, "isFocused", void 0);
__decorate([
    HostBinding('class.sort-active'), 
    __metadata('design:type', Boolean)
], DataTableBodyCellComponent.prototype, "isSortActive", null);
__decorate([
    HostBinding('class.sort-asc'), 
    __metadata('design:type', Boolean)
], DataTableBodyCellComponent.prototype, "isSortAscending", null);
__decorate([
    HostBinding('class.sort-desc'), 
    __metadata('design:type', Boolean)
], DataTableBodyCellComponent.prototype, "isSortDescending", null);
__decorate([
    HostBinding('style.width.px'), 
    __metadata('design:type', Number)
], DataTableBodyCellComponent.prototype, "width", null);
__decorate([
    HostBinding('style.height'), 
    __metadata('design:type', Object)
], DataTableBodyCellComponent.prototype, "height", null);
__decorate([
    HostListener('focus', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], DataTableBodyCellComponent.prototype, "onFocus", null);
__decorate([
    HostListener('blur', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], DataTableBodyCellComponent.prototype, "onBlur", null);
__decorate([
    HostListener('click', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], DataTableBodyCellComponent.prototype, "onClick", null);
__decorate([
    HostListener('dblclick', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], DataTableBodyCellComponent.prototype, "onDblClick", null);
__decorate([
    HostListener('keydown', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], DataTableBodyCellComponent.prototype, "onKeyDown", null);
DataTableBodyCellComponent = __decorate([
    Component({
        selector: 'datatable-body-cell',
        template: `
    <div class="datatable-body-cell-label">
      <span
        *ngIf="!column.cellTemplate"
        [innerHTML]="value">
      </span>
      <template
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngOutletContext]="{ value: value, row: row, column: column }">
      </template>
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [ElementRef, Renderer])
], DataTableBodyCellComponent);
//# sourceMappingURL=body-cell.component.js.map