var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ElementRef, EventEmitter, ViewChild, HostListener, ContentChildren, QueryList, HostBinding, Renderer, ContentChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { forceFillColumnWidths, adjustColumnWidths, sortRows } from '../utils';
import { ColumnMode, SortType, SelectionType } from '../types';
import { DataTableBodyComponent } from './body';
import { DataTableColumnDirective } from './column.directive';
import { DatatableRowDetailDirective } from './row-detail.directive';
import { scrollbarWidth, setColumnDefaults, translateTemplates } from '../utils';
export let DatatableComponent = class DatatableComponent {
    constructor(renderer, element) {
        // Enable vertical scrollbars
        this.scrollbarV = false;
        // Enable horz scrollbars
        this.scrollbarH = false;
        // The row height; which is necessary
        // to calculate the height for the lazy rendering.
        this.rowHeight = 30;
        // The detail row height is required especially when virtual scroll is enabled.
        this.detailRowHeight = 0;
        // Type of column width distribution.
        // Example: flex, force, standard
        this.columnMode = ColumnMode.standard;
        // The minimum header height in pixels.
        // pass falsey for no header
        // note: number|string does not work right
        this.headerHeight = 30;
        // The minimum footer height in pixels.
        // pass falsey for no footer
        this.footerHeight = 0;
        // if external paging is turned on
        this.externalPaging = false;
        // Page size
        this.limit = undefined;
        // Total count
        this.count = 0;
        // Page offset
        this.offset = 0;
        // Loading indicator
        this.loadingIndicator = false;
        // if you can reorder columns
        this.reorderable = true;
        // type of sorting
        this.sortType = SortType.single;
        // sorts
        this.sorts = [];
        // css class overrides
        this.cssClasses = {
            sortAscending: 'icon-down',
            sortDescending: 'icon-up',
            pagerLeftArrow: 'icon-left',
            pagerRightArrow: 'icon-right',
            pagerPrevious: 'icon-prev',
            pagerNext: 'icon-skip'
        };
        // message overrides for localization
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total'
        };
        // This will be used when displaying or selecting rows:
        // when tracking/comparing them, we'll use the value of this fn,
        // (`fn(x) === fn(y)` instead of `x === y`)
        this.rowIdentity = ((x) => x);
        this.scroll = new EventEmitter();
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
        this.sort = new EventEmitter();
        this.page = new EventEmitter();
        this.detailToggle = new EventEmitter();
        this.reorder = new EventEmitter();
        this.resize = new EventEmitter();
        this.offsetX = 0;
        this.element = element.nativeElement;
        renderer.setElementClass(this.element, 'datatable', true);
    }
    // Rows
    set rows(val) {
        this._rows = val;
        this.recalculate();
    }
    get rows() {
        return this._rows;
    }
    // Columns
    set columns(val) {
        if (val) {
            setColumnDefaults(val);
            this.recalculateColumns(val);
        }
        this._columns = val;
    }
    get columns() {
        return this._columns;
    }
    get isFixedHeader() {
        const headerHeight = this.headerHeight;
        return (typeof headerHeight === 'string') ?
            headerHeight !== 'auto' : true;
    }
    get isFixedRow() {
        const rowHeight = this.rowHeight;
        return (typeof rowHeight === 'string') ?
            rowHeight !== 'auto' : true;
    }
    get isVertScroll() {
        return this.scrollbarV;
    }
    get isHorScroll() {
        return this.scrollbarH;
    }
    get isSelectable() {
        return this.selectionType !== undefined;
    }
    set columnTemplates(val) {
        this._columnTemplates = val;
        if (val) {
            // only set this if results were brought back
            const arr = val.toArray();
            if (arr.length) {
                // translate them to normal objects
                this.columns = translateTemplates(arr);
            }
        }
    }
    get columnTemplates() {
        return this._columnTemplates;
    }
    set rowDetailTemplateChild(val) {
        this._rowDetailTemplateChild = val;
        if (val)
            this.rowDetailTemplate = val.rowDetailTemplate;
    }
    get rowDetailTemplateChild() {
        return this._rowDetailTemplateChild;
    }
    ngOnInit() {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    }
    ngAfterViewInit() {
        this.recalculate();
    }
    /**
     * Refresh the table rows manually.
     */
    refresh() {
        this.bodyComponent.recalcLayout();
    }
    /**
     * Toggle the expansion of the row
     *
     * @param rowIndex
     */
    toggleExpandRow(row) {
        // Should we write a guard here??
        this.bodyComponent.toggleRowExpansion(row);
    }
    /**
     * API method to expand all the rows.
     */
    expandAllRows() {
        this.bodyComponent.toggleAllRows(true);
    }
    /**
     * API method to collapse all the rows.
     */
    collapseAllRows() {
        this.bodyComponent.toggleAllRows(false);
    }
    recalculate() {
        this.recalculateDims();
        this.recalculateColumns();
    }
    recalculateColumns(columns = this.columns, forceIdx) {
        if (!columns)
            return;
        let width = this.innerWidth;
        if (this.scrollbarV) {
            width = width - scrollbarWidth;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    }
    recalculateDims() {
        let { height, width } = this.element.getBoundingClientRect();
        this.innerWidth = Math.floor(width);
        if (this.scrollbarV) {
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    }
    onBodyPage({ offset }) {
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    }
    onBodyScroll(event) {
        this.offsetX = event.offsetX;
        this.scroll.emit(event);
    }
    onFooterPage(event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    }
    calcPageSize(val = this.rows) {
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV)
            return Math.ceil(this.bodyHeight / this.rowHeight);
        // if limit is passed, we are paging
        if (this.limit !== undefined)
            return this.limit;
        // otherwise use row length
        if (val)
            return val.length;
        // other empty :(
        return 0;
    }
    calcRowCount(val = this.rows) {
        if (!this.externalPaging) {
            if (!val)
                return 0;
            return val.length;
        }
        return this.count;
    }
    onColumnResize({ column, newValue }) {
        let idx;
        let cols = this.columns.map((c, i) => {
            c = Object.assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        });
        this.recalculateColumns(cols, idx);
        this.columns = cols;
        this.resize.emit({
            column,
            newValue
        });
    }
    onColumnReorder({ column, newValue, prevValue }) {
        let cols = this.columns.map(c => {
            return Object.assign({}, c);
        });
        cols.splice(prevValue, 1);
        cols.splice(newValue, 0, column);
        this.columns = cols;
        this.reorder.emit({
            column,
            newValue,
            prevValue
        });
    }
    onColumnSort(event) {
        const { column, sorts } = event;
        if (column.comparator !== undefined) {
            if (typeof column.comparator === 'function') {
                column.comparator(this.rows, this.sorts);
            }
        }
        else {
            this.rows = sortRows(this.rows, this.sorts);
        }
        this.sorts = sorts;
        this.bodyComponent.updateOffsetY(0);
        this.sort.emit(event);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array), 
    __metadata('design:paramtypes', [Array])
], DatatableComponent.prototype, "rows", null);
__decorate([
    Input(), 
    __metadata('design:type', Array), 
    __metadata('design:paramtypes', [Array])
], DatatableComponent.prototype, "columns", null);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], DatatableComponent.prototype, "selected", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DatatableComponent.prototype, "scrollbarV", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DatatableComponent.prototype, "scrollbarH", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DatatableComponent.prototype, "rowHeight", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DatatableComponent.prototype, "detailRowHeight", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DatatableComponent.prototype, "columnMode", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "headerHeight", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DatatableComponent.prototype, "footerHeight", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DatatableComponent.prototype, "externalPaging", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DatatableComponent.prototype, "limit", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DatatableComponent.prototype, "count", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DatatableComponent.prototype, "offset", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DatatableComponent.prototype, "loadingIndicator", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DatatableComponent.prototype, "selectionType", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DatatableComponent.prototype, "reorderable", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DatatableComponent.prototype, "sortType", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], DatatableComponent.prototype, "sorts", void 0);
__decorate([
    Input(), 
    __metadata('design:type', TemplateRef)
], DatatableComponent.prototype, "rowDetailTemplate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "cssClasses", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "messages", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "rowIdentity", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "selectCheck", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DatatableComponent.prototype, "scroll", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DatatableComponent.prototype, "activate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DatatableComponent.prototype, "select", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DatatableComponent.prototype, "sort", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DatatableComponent.prototype, "page", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DatatableComponent.prototype, "detailToggle", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DatatableComponent.prototype, "reorder", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DatatableComponent.prototype, "resize", void 0);
__decorate([
    HostBinding('class.fixed-header'), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "isFixedHeader", null);
__decorate([
    HostBinding('class.fixed-row'), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "isFixedRow", null);
__decorate([
    HostBinding('class.scroll-vertical'), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "isVertScroll", null);
__decorate([
    HostBinding('class.scroll-horz'), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "isHorScroll", null);
__decorate([
    HostBinding('class.selectable'), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "isSelectable", null);
__decorate([
    ContentChildren(DataTableColumnDirective), 
    __metadata('design:type', QueryList), 
    __metadata('design:paramtypes', [QueryList])
], DatatableComponent.prototype, "columnTemplates", null);
__decorate([
    ContentChild(DatatableRowDetailDirective), 
    __metadata('design:type', DatatableRowDetailDirective), 
    __metadata('design:paramtypes', [DatatableRowDetailDirective])
], DatatableComponent.prototype, "rowDetailTemplateChild", null);
__decorate([
    ViewChild(DataTableBodyComponent), 
    __metadata('design:type', DataTableBodyComponent)
], DatatableComponent.prototype, "bodyComponent", void 0);
__decorate([
    HostListener('window:resize'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], DatatableComponent.prototype, "recalculate", null);
DatatableComponent = __decorate([
    Component({
        selector: 'datatable',
        template: `
    <div
      visibility-observer
      (visible)="recalculate()">
      <datatable-header
        *ngIf="headerHeight"
        [sorts]="sorts"
        [sortType]="sortType"
        [scrollbarH]="scrollbarH"
        [innerWidth]="innerWidth"
        [offsetX]="offsetX"
        [columns]="columns"
        [headerHeight]="headerHeight"
        [sortAscendingIcon]="cssClasses.sortAscending"
        [sortDescendingIcon]="cssClasses.sortDescending"
        (sort)="onColumnSort($event)"
        (resize)="onColumnResize($event)"
        (reorder)="onColumnReorder($event)">
      </datatable-header>
      <datatable-body
        [rows]="rows"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [loadingIndicator]="loadingIndicator"
        [rowHeight]="rowHeight"
        [rowCount]="rowCount"
        [offset]="offset"
        [columns]="columns"
        [pageSize]="pageSize"
        [offsetX]="offsetX"
        [rowDetailTemplate]="rowDetailTemplate"
        [detailRowHeight]="detailRowHeight"
        [selected]="selected"
        [innerWidth]="innerWidth"
        [bodyHeight]="bodyHeight"
        [selectionType]="selectionType"
        [emptyMessage]="messages.emptyMessage"
        [rowIdentity]="rowIdentity"
        [selectCheck]="selectCheck"
        (page)="onBodyPage($event)"
        (activate)="activate.emit($event)"
        (select)="select.emit($event)"
        (detailToggle)="detailToggle.emit($event)"
        (scroll)="onBodyScroll($event)">
      </datatable-body>
      <datatable-footer
        *ngIf="footerHeight"
        [rowCount]="rowCount"
        [pageSize]="pageSize"
        [offset]="offset"
        [footerHeight]="footerHeight"
        [totalMessage]="messages.totalMessage"
        [pagerLeftArrowIcon]="cssClasses.pagerLeftArrow"
        [pagerRightArrowIcon]="cssClasses.pagerRightArrow"
        [pagerPreviousIcon]="cssClasses.pagerPrevious"
        [pagerNextIcon]="cssClasses.pagerNext"
        (page)="onFooterPage($event)">
      </datatable-footer>
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [Renderer, ElementRef])
], DatatableComponent);
//# sourceMappingURL=datatable.component.js.map