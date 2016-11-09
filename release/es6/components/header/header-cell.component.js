var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { SortDirection, SortType } from '../../types';
import { nextSortDir } from '../../utils';
export let DataTableHeaderCellComponent = class DataTableHeaderCellComponent {
    constructor() {
        this.sort = new EventEmitter();
    }
    set sorts(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
    }
    get sorts() {
        return this._sorts;
    }
    get columnCssClasses() {
        let cls = 'datatable-header-cell';
        if (this.column.sortable)
            cls += ' sortable';
        if (this.column.resizeable)
            cls += ' resizeable';
        const sortDir = this.sortDir;
        if (sortDir) {
            cls += ` sort-active sort-${sortDir}`;
        }
        return cls;
    }
    get name() {
        return this.column.name || this.column.prop;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get width() {
        return this.column.width;
    }
    sortClasses(dir) {
        let result = {};
        if (dir === SortDirection.asc) {
            result[`sort-asc ${this.sortAscendingIcon}`] = true;
        }
        else if (dir === SortDirection.desc) {
            result[`sort-desc ${this.sortDescendingIcon}`] = true;
        }
        return result;
    }
    calcSortDir(sorts) {
        if (sorts && this.column) {
            const sort = sorts.find(s => {
                return s.prop === this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    }
    onSort() {
        if (!this.column.sortable)
            return;
        const newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue
        });
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableHeaderCellComponent.prototype, "sortType", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableHeaderCellComponent.prototype, "column", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTableHeaderCellComponent.prototype, "sortAscendingIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTableHeaderCellComponent.prototype, "sortDescendingIcon", void 0);
__decorate([
    HostBinding('style.height.px'),
    Input(), 
    __metadata('design:type', Number)
], DataTableHeaderCellComponent.prototype, "headerHeight", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array), 
    __metadata('design:paramtypes', [Array])
], DataTableHeaderCellComponent.prototype, "sorts", null);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTableHeaderCellComponent.prototype, "sort", void 0);
__decorate([
    HostBinding('class'), 
    __metadata('design:type', Object)
], DataTableHeaderCellComponent.prototype, "columnCssClasses", null);
__decorate([
    HostBinding('attr.title'), 
    __metadata('design:type', String)
], DataTableHeaderCellComponent.prototype, "name", null);
__decorate([
    HostBinding('style.minWidth.px'), 
    __metadata('design:type', Number)
], DataTableHeaderCellComponent.prototype, "minWidth", null);
__decorate([
    HostBinding('style.maxWidth.px'), 
    __metadata('design:type', Number)
], DataTableHeaderCellComponent.prototype, "maxWidth", null);
__decorate([
    HostBinding('style.width.px'), 
    __metadata('design:type', Number)
], DataTableHeaderCellComponent.prototype, "width", null);
DataTableHeaderCellComponent = __decorate([
    Component({
        selector: 'datatable-header-cell',
        template: `
    <div>
      <span
        class="datatable-header-cell-label draggable"
        *ngIf="!column.headerTemplate"
        (click)="onSort()"
        [innerHTML]="name">
      </span>
      <template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngOutletContext]="{ 
          column: column, 
          sortDir: sortDir
        }">
      </template>
      <span
        class="sort-btn"
        [ngClass]="sortClasses(sortDir)">
      </span>
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [])
], DataTableHeaderCellComponent);
//# sourceMappingURL=header-cell.component.js.map