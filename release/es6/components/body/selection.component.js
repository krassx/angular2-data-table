var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Keys, selectRows, selectRowsBetween } from '../../utils';
import { SelectionType } from '../../types';
export let DataTableSelectionComponent = class DataTableSelectionComponent {
    constructor() {
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
    }
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        const multiShift = this.selectionType === SelectionType.multiShift;
        const multiClick = this.selectionType === SelectionType.multi;
        let selected = [];
        if (multiShift || multiClick) {
            if (multiShift && event.shiftKey) {
                const newSelected = [...this.selected];
                selected = selectRowsBetween(newSelected, this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (multiShift && !event.shiftKey) {
                selected.push(row);
            }
            else {
                const newSelected = [...this.selected];
                selected = selectRows(newSelected, row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected.push(row);
        }
        if (this.selectCheck) {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected = selected;
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    onActivate(model, index) {
        const { type, event, row } = model;
        if (type === 'click' || type === 'dblclick') {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (event.keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    }
    onKeyboardFocus(model) {
        const { keyCode } = model.event;
        const shouldFocus = keyCode === Keys.up ||
            keyCode === Keys.down ||
            keyCode === Keys.right ||
            keyCode === Keys.left;
        if (shouldFocus) {
            const isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    focusRow(rowElement, keyCode) {
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    getPrevNextRow(rowElement, keyCode) {
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            let focusElement;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    }
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        let nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return selected.findIndex((r) => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], DataTableSelectionComponent.prototype, "rows", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], DataTableSelectionComponent.prototype, "selected", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], DataTableSelectionComponent.prototype, "selectEnabled", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], DataTableSelectionComponent.prototype, "selectionType", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableSelectionComponent.prototype, "rowIdentity", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], DataTableSelectionComponent.prototype, "selectCheck", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTableSelectionComponent.prototype, "activate", void 0);
__decorate([
    Output(), 
    __metadata('design:type', EventEmitter)
], DataTableSelectionComponent.prototype, "select", void 0);
DataTableSelectionComponent = __decorate([
    Component({
        selector: 'datatable-selection',
        template: `
    <ng-content></ng-content>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [])
], DataTableSelectionComponent);
//# sourceMappingURL=selection.component.js.map