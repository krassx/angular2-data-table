var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ElementRef, ChangeDetectionStrategy, Renderer, Output, EventEmitter, HostListener } from '@angular/core';
import { columnsByPin, columnGroupWidths, columnsByPinArr, translateXY, Keys, scrollbarWidth } from '../../utils';
export let DataTableBodyRowComponent = class DataTableBodyRowComponent {
    constructor(element, renderer) {
        this.activate = new EventEmitter();
        this.element = element.nativeElement;
        renderer.setElementClass(this.element, 'datatable-body-row', true);
    }
    set columns(val) {
        this._columns = val;
        this.recalculateColumns(val);
    }
    get columns() {
        return this._columns;
    }
    set innerWidth(val) {
        this._innerWidth = val;
        this.recalculateColumns();
    }
    get innerWidth() {
        return this._innerWidth;
    }
    get isEvenRow() {
        return this.row.$$index % 2 === 0;
    }
    get isOddRow() {
        return this.row.$$index % 2 !== 0;
    }
    stylesByGroup(group) {
        const widths = this.columnGroupWidths;
        const offsetX = this.offsetX;
        let styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = (offsetDiff + scrollbarWidth) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this.element;
        this.activate.emit(event);
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetRow = event.target === this.element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                rowElement: this.element
            });
        }
    }
    recalculateColumns(val = this.columns) {
        const colsByPin = columnsByPin(val);
        this.columnsByPin = columnsByPinArr(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
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
    __metadata('design:type', Array), 
    __metadata('design:paramtypes', [Array])
], DataTableBodyRowComponent.prototype, "columns", null);
__decorate([
    Input(), 
    __metadata('design:type', Number), 
    __metadata('design:paramtypes', [Number])
], DataTableBodyRowComponent.prototype, "innerWidth", null);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableBodyRowComponent.prototype, "row", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableBodyRowComponent.prototype, "offsetX", void 0);
__decorate([
    HostBinding('style.height.px'),
    Input(), 
    __metadata('design:type', Number)
], DataTableBodyRowComponent.prototype, "rowHeight", void 0);
__decorate([
    HostBinding('class.active'),
    Input(), 
    __metadata('design:type', Boolean)
], DataTableBodyRowComponent.prototype, "isSelected", void 0);
__decorate([
    HostBinding('class.datatable-row-even'), 
    __metadata('design:type', Boolean)
], DataTableBodyRowComponent.prototype, "isEvenRow", null);
__decorate([
    HostBinding('class.datatable-row-odd'), 
    __metadata('design:type', Boolean)
], DataTableBodyRowComponent.prototype, "isOddRow", null);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTableBodyRowComponent.prototype, "activate", void 0);
__decorate([
    HostListener('keydown', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], DataTableBodyRowComponent.prototype, "onKeyDown", null);
DataTableBodyRowComponent = __decorate([
    Component({
        selector: 'datatable-body-row',
        template: `
    <div
      *ngFor="let colGroup of columnsByPin; let i = index; trackBy: trackByColGroup"
      class="datatable-row-{{colGroup.type}} datatable-row-group"
      [ngStyle]="stylesByGroup(colGroup.type)">
      <datatable-body-cell
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: trackByColumn"
        tabindex="-1"
        [row]="row"
        [column]="column"
        [rowHeight]="rowHeight"
        (activate)="onActivate($event, ii)">
      </datatable-body-cell>
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [ElementRef, Renderer])
], DataTableBodyRowComponent);
//# sourceMappingURL=body-row.component.js.map