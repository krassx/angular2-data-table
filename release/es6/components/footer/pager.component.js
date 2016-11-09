var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, Renderer, ElementRef, ChangeDetectionStrategy } from '@angular/core';
export let DataTablePagerComponent = class DataTablePagerComponent {
    constructor(element, renderer) {
        this.change = new EventEmitter();
        renderer.setElementClass(element.nativeElement, 'datatable-pager', true);
    }
    set size(val) {
        this._size = val;
        this.pages = this.calcPages();
    }
    get size() {
        return this._size;
    }
    set count(val) {
        this._count = val;
        this.pages = this.calcPages();
    }
    get count() {
        return this._count;
    }
    set page(val) {
        this._page = val;
        this.pages = this.calcPages();
    }
    get page() {
        return this._page;
    }
    get totalPages() {
        const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
    }
    canPrevious() {
        return this.page > 1;
    }
    canNext() {
        return this.page < this.totalPages;
    }
    prevPage() {
        if (this.page > 1) {
            this.selectPage(--this.page);
        }
    }
    nextPage() {
        this.selectPage(++this.page);
    }
    selectPage(page) {
        if (page > 0 && page <= this.totalPages) {
            this.page = page;
            this.change.emit({
                page
            });
        }
    }
    calcPages(page) {
        let pages = [];
        let startPage = 1;
        let endPage = this.totalPages;
        let maxSize = 5;
        const isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = ((Math.ceil(page / maxSize) - 1) * maxSize) + 1;
            endPage = Math.min(startPage + maxSize - 1, this.totalPages);
        }
        for (let num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTablePagerComponent.prototype, "pagerLeftArrowIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTablePagerComponent.prototype, "pagerRightArrowIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTablePagerComponent.prototype, "pagerPreviousIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], DataTablePagerComponent.prototype, "pagerNextIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number), 
    __metadata('design:paramtypes', [Number])
], DataTablePagerComponent.prototype, "size", null);
__decorate([
    Input(), 
    __metadata('design:type', Number), 
    __metadata('design:paramtypes', [Number])
], DataTablePagerComponent.prototype, "count", null);
__decorate([
    Input(), 
    __metadata('design:type', Number), 
    __metadata('design:paramtypes', [Number])
], DataTablePagerComponent.prototype, "page", null);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTablePagerComponent.prototype, "change", void 0);
DataTablePagerComponent = __decorate([
    Component({
        selector: 'datatable-pager',
        template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a
          href="javascript:void(0)"
          (click)="selectPage(1)">
          <i class="{{pagerPreviousIcon}}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a
          href="javascript:void(0)"
          (click)="prevPage()">
          <i class="{{pagerLeftArrowIcon}}"></i>
        </a>
      </li>
      <li
        *ngFor="let pg of pages"
        [class.active]="pg.number === page">
        <a
          href="javascript:void(0)"
          (click)="selectPage(pg.number)">
          {{pg.text}}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a
          href="javascript:void(0)"
          (click)="nextPage()">
          <i class="{{pagerRightArrowIcon}}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a
          href="javascript:void(0)"
          (click)="selectPage(totalPages)">
          <i class="{{pagerNextIcon}}"></i>
        </a>
      </li>
    </ul>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [ElementRef, Renderer])
], DataTablePagerComponent);
//# sourceMappingURL=pager.component.js.map