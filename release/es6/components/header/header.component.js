var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, ElementRef, Renderer, EventEmitter, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { SortType } from '../../types';
import { columnsByPin, columnGroupWidths, columnsByPinArr, translateXY } from '../../utils';
export let DataTableHeaderComponent = class DataTableHeaderComponent {
    constructor(element, renderer) {
        this.sort = new EventEmitter();
        this.reorder = new EventEmitter();
        this.resize = new EventEmitter();
        renderer.setElementClass(element.nativeElement, 'datatable-header', true);
    }
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    get headerHeight() {
        return this._headerHeight;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this.columnsByPin = columnsByPinArr(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    get columns() {
        return this._columns;
    }
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    onColumnReordered({ prevIndex, newIndex, column }) {
        this.reorder.emit({
            column,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    onSort({ column, prevValue, newValue }) {
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    calcNewSorts(column, prevValue, newValue) {
        let idx = 0;
        let sorts = this.sorts.map((s, i) => {
            s = Object.assign({}, s);
            if (s.prop === column.prop)
                idx = i;
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    }
    stylesByGroup(group) {
        const widths = this.columnGroupWidths;
        const offsetX = this.offsetX;
        let styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            const totalDiff = widths.total - this.innerWidth;
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    trackByColGroup(index, item) {
        return item && item.type;
    }
    trackByColumn(index, item) {
        return item && item.$$id;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableHeaderComponent.prototype, "sortAscendingIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableHeaderComponent.prototype, "sortDescendingIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DataTableHeaderComponent.prototype, "scrollbarH", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableHeaderComponent.prototype, "innerWidth", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableHeaderComponent.prototype, "offsetX", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], DataTableHeaderComponent.prototype, "sorts", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableHeaderComponent.prototype, "sortType", void 0);
__decorate([
    HostBinding('style.height'),
    Input(), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], DataTableHeaderComponent.prototype, "headerHeight", null);
__decorate([
    Input(), 
    __metadata('design:type', Array), 
    __metadata('design:paramtypes', [Array])
], DataTableHeaderComponent.prototype, "columns", null);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTableHeaderComponent.prototype, "sort", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTableHeaderComponent.prototype, "reorder", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTableHeaderComponent.prototype, "resize", void 0);
__decorate([
    HostBinding('style.width'), 
    __metadata('design:type', String)
], DataTableHeaderComponent.prototype, "headerWidth", null);
DataTableHeaderComponent = __decorate([
    Component({
        selector: 'datatable-header',
        template: `
    <div
      orderable
      (reorder)="onColumnReordered($event)"
      [style.width.px]="columnGroupWidths.total"
      class="datatable-header-inner">
      <div
        *ngFor="let colGroup of columnsByPin; trackBy: trackByColGroup"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="stylesByGroup(colGroup.type)">
        <datatable-header-cell
          *ngFor="let column of colGroup.columns; trackBy: trackByColumn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          (longPress)="drag = true"
          (longPressEnd)="drag = false"
          draggable
          [dragX]="column.draggable && drag"
          [dragY]="false"
          [dragModel]="column"
          [headerHeight]="headerHeight"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          (sort)="onSort($event)">
        </datatable-header-cell>
      </div>
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [ElementRef, Renderer])
], DataTableHeaderComponent);
//# sourceMappingURL=header.component.js.map