/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../src/components/header/header.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../directives/orderable.directive.ngfactory';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '../../../../src/directives/orderable.directive';
import * as import20 from '../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import21 from '@angular/common/src/directives/ng_style';
import * as import22 from '../../directives/draggable.directive.ngfactory';
import * as import23 from '../../directives/resizeable.directive.ngfactory';
import * as import24 from '../../directives/long-press.directive.ngfactory';
import * as import25 from './header-cell.component.ngfactory';
import * as import26 from '../../../../src/directives/draggable.directive';
import * as import27 from '../../../../src/directives/resizeable.directive';
import * as import28 from '../../../../src/directives/long-press.directive';
import * as import29 from '../../../../src/components/header/header-cell.component';
export class Wrapper_DataTableHeaderComponent {
  context:import0.DataTableHeaderComponent;
  changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.DataTableHeaderComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
  }
  check_sortAscendingIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.sortAscendingIcon = currValue;
      this._expr_0 = currValue;
    }
  }
  check_sortDescendingIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.sortDescendingIcon = currValue;
      this._expr_1 = currValue;
    }
  }
  check_scrollbarH(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this.changed = true;
      this.context.scrollbarH = currValue;
      this._expr_2 = currValue;
    }
  }
  check_innerWidth(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this.changed = true;
      this.context.innerWidth = currValue;
      this._expr_3 = currValue;
    }
  }
  check_offsetX(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this.changed = true;
      this.context.offsetX = currValue;
      this._expr_4 = currValue;
    }
  }
  check_sorts(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this.changed = true;
      this.context.sorts = currValue;
      this._expr_5 = currValue;
    }
  }
  check_sortType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this.changed = true;
      this.context.sortType = currValue;
      this._expr_6 = currValue;
    }
  }
  check_headerHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this.changed = true;
      this.context.headerHeight = currValue;
      this._expr_7 = currValue;
    }
  }
  check_columns(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this.changed = true;
      this.context.columns = currValue;
      this._expr_8 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_9:any = this.context.headerHeight;
    if (import2.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      view.renderer.setElementStyle(el,'height',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9) == (null as any))? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9).toString()));
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.context.headerWidth;
    if (import2.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      view.renderer.setElementStyle(el,'width',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_10) == (null as any))? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_10).toString()));
      this._expr_10 = currVal_10;
    }
  }
}
var renderType_DataTableHeaderComponent_Host:import5.RenderComponentType = (null as any);
class _View_DataTableHeaderComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _DataTableHeaderComponent_0_4:Wrapper_DataTableHeaderComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableHeaderComponent_Host0,renderType_DataTableHeaderComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'datatable-header',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DataTableHeaderComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DataTableHeaderComponent_0_4 = new Wrapper_DataTableHeaderComponent(new import9.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._DataTableHeaderComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._DataTableHeaderComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTableHeaderComponent) && (0 === requestNodeIndex))) { return this._DataTableHeaderComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._DataTableHeaderComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    this._DataTableHeaderComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DataTableHeaderComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  if ((renderType_DataTableHeaderComponent_Host === (null as any))) { (renderType_DataTableHeaderComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_DataTableHeaderComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DataTableHeaderComponentNgFactory:import11.ComponentFactory<import0.DataTableHeaderComponent> = new import11.ComponentFactory<import0.DataTableHeaderComponent>('datatable-header',viewFactory_DataTableHeaderComponent_Host0,import0.DataTableHeaderComponent);
const styles_DataTableHeaderComponent:any[] = ([] as any[]);
var renderType_DataTableHeaderComponent:import5.RenderComponentType = (null as any);
class _View_DataTableHeaderComponent0 extends import3.AppView<import0.DataTableHeaderComponent> {
  _text_0:any;
  _el_1:any;
  _OrderableDirective_1_3:import12.Wrapper_OrderableDirective;
  _query_DraggableDirective_1_0:import13.QueryList<any>;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import6.AppElement;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import14.Wrapper_NgFor;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableHeaderComponent0,renderType_DataTableHeaderComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_11 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import6.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import2.createRenderElement(this.renderer,parentRenderNode,'div',new import2.InlineArray4(4,'class','datatable-header-inner','orderable',''),(null as any));
    this._OrderableDirective_1_3 = new import12.Wrapper_OrderableDirective(this.parentInjector.get(import15.KeyValueDiffers));
    this._query_DraggableDirective_1_0 = new import13.QueryList<any>();
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import6.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import16.TemplateRef_(this._appEl_3,viewFactory_DataTableHeaderComponent1);
    this._NgFor_3_6 = new import14.Wrapper_NgFor(this._appEl_3.vcRef,this._TemplateRef_3_5,this.parentInjector.get(import17.IterableDiffers),this.ref);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'reorder',this.eventHandler(this._handle_reorder_1_0.bind(this)));
    const subscription_0:any = this._OrderableDirective_1_3.context.reorder.subscribe(this.eventHandler(this._handle_reorder_1_0.bind(this)));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._text_5
    ]
    ,[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import18.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6.context; }
    if (((token === import19.OrderableDirective) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._OrderableDirective_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._OrderableDirective_1_3.detectChangesInInputProps(this,this._el_1,throwOnChange);
    const currVal_3_0_0:any = this.context.columnsByPin;
    this._NgFor_3_6.check_ngForOf(currVal_3_0_0,throwOnChange,false);
    const currVal_3_0_1:any = this.context.trackByColGroup;
    this._NgFor_3_6.check_ngForTrackBy(currVal_3_0_1,throwOnChange,false);
    this._NgFor_3_6.detectChangesInInputProps(this,this._anchor_3,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_DraggableDirective_1_0.dirty) {
          this._query_DraggableDirective_1_0.reset([this._appEl_3.mapNestedViews(_View_DataTableHeaderComponent1,(nestedView:_View_DataTableHeaderComponent1):any => {
              return [nestedView._appEl_2.mapNestedViews(_View_DataTableHeaderComponent2,(nestedView:_View_DataTableHeaderComponent2):any => {
                return [nestedView._DraggableDirective_0_4.context];
            })];
        })]);
        this._OrderableDirective_1_3.context.draggables = this._query_DraggableDirective_1_0;
        this._query_DraggableDirective_1_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._OrderableDirective_1_3.context.ngAfterContentInit(); }
    }
    const currVal_11:any = this.context.columnGroupWidths.total;
    if (import2.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementStyle(this._el_1,'width',((this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_11) == (null as any))? (null as any): (this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_11).toString() + 'px')));
      this._expr_11 = currVal_11;
    }
    this._OrderableDirective_1_3.detectChangesInHostProps(this,this._el_1,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._OrderableDirective_1_3.context.ngOnDestroy();
  }
  private _handle_reorder_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_1_0:any = ((<any>this.context.onColumnReordered($event)) !== false);
    return (true && pd_1_0);
  }
}
export function viewFactory_DataTableHeaderComponent0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<import0.DataTableHeaderComponent> {
  if ((renderType_DataTableHeaderComponent === (null as any))) { (renderType_DataTableHeaderComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_DataTableHeaderComponent,{})); }
  return new _View_DataTableHeaderComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableHeaderComponent1 extends import3.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import20.Wrapper_NgStyle;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import6.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import14.Wrapper_NgFor;
  _text_3:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableHeaderComponent1,renderType_DataTableHeaderComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_8 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'div',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._NgStyle_0_3 = new import20.Wrapper_NgStyle(this.parent.parentInjector.get(import15.KeyValueDiffers),new import9.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import6.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import16.TemplateRef_(this._appEl_2,viewFactory_DataTableHeaderComponent2);
    this._NgFor_2_6 = new import14.Wrapper_NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parent.parentInjector.get(import17.IterableDiffers),this.parent.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import18.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import21.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgStyle_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parent.context.stylesByGroup(this.context.$implicit.type);
    this._NgStyle_0_3.check_ngStyle(currVal_0_0_0,throwOnChange,false);
    this._NgStyle_0_3.detectChangesInInputProps(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.context.$implicit.columns;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parent.context.trackByColumn;
    this._NgFor_2_6.check_ngForTrackBy(currVal_2_0_1,throwOnChange,false);
    this._NgFor_2_6.detectChangesInInputProps(this,this._anchor_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_8:any = ('datatable-row-' + this.context.$implicit.type);
    if (import2.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_8);
      this._expr_8 = currVal_8;
    }
    this._NgStyle_0_3.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DataTableHeaderComponent1(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  return new _View_DataTableHeaderComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_DataTableHeaderComponent2 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _DraggableDirective_0_4:import22.Wrapper_DraggableDirective;
  _ResizeableDirective_0_5:import23.Wrapper_ResizeableDirective;
  _LongPressDirective_0_6:import24.Wrapper_LongPressDirective;
  _DataTableHeaderCellComponent_0_7:import25.Wrapper_DataTableHeaderCellComponent;
  _text_1:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_DataTableHeaderComponent2,renderType_DataTableHeaderComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'datatable-header-cell',new import2.InlineArray8(6,'draggable','','long-press','','resizeable',''),(null as any));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import25.viewFactory_DataTableHeaderCellComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DraggableDirective_0_4 = new import22.Wrapper_DraggableDirective(new import9.ElementRef(this._el_0));
    this._ResizeableDirective_0_5 = new import23.Wrapper_ResizeableDirective(new import9.ElementRef(this._el_0));
    this._LongPressDirective_0_6 = new import24.Wrapper_LongPressDirective();
    this._DataTableHeaderCellComponent_0_7 = new import25.Wrapper_DataTableHeaderCellComponent();
    this._appEl_0.initComponent(this._DataTableHeaderCellComponent_0_7.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    compView_0.create(this._DataTableHeaderCellComponent_0_7.context,([] as any[]),(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'resize',this.eventHandler(this._handle_resize_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'longPress',this.eventHandler(this._handle_longPress_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'longPressEnd',this.eventHandler(this._handle_longPressEnd_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'sort',this.eventHandler(this._handle_sort_0_3.bind(this)));
    var disposable_4:Function = this.renderer.listenGlobal('document','mouseup',this.eventHandler(this._handle_mouseup_0_4.bind(this)));
    var disposable_5:Function = this.renderer.listen(this._el_0,'mousedown',this.eventHandler(this._handle_mousedown_0_5.bind(this)));
    var disposable_6:Function = this.renderer.listen(this._el_0,'mousemove',this.eventHandler(this._handle_mousemove_0_6.bind(this)));
    var disposable_7:Function = this.renderer.listen(this._el_0,'mouseup',this.eventHandler(this._handle_mouseup_0_7.bind(this)));
    const subscription_0:any = this._ResizeableDirective_0_5.context.resize.subscribe(this.eventHandler(this._handle_resize_0_0.bind(this)));
    const subscription_1:any = this._LongPressDirective_0_6.context.longPress.subscribe(this.eventHandler(this._handle_longPress_0_1.bind(this)));
    const subscription_2:any = this._LongPressDirective_0_6.context.longPressEnd.subscribe(this.eventHandler(this._handle_longPressEnd_0_2.bind(this)));
    const subscription_3:any = this._DataTableHeaderCellComponent_0_7.context.sort.subscribe(this.eventHandler(this._handle_sort_0_3.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5,
      disposable_6,
      disposable_7
    ]
    ,[
      subscription_0,
      subscription_1,
      subscription_2,
      subscription_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.DraggableDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._DraggableDirective_0_4.context; }
    if (((token === import27.ResizeableDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._ResizeableDirective_0_5.context; }
    if (((token === import28.LongPressDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._LongPressDirective_0_6.context; }
    if (((token === import29.DataTableHeaderCellComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._DataTableHeaderCellComponent_0_7.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._DraggableDirective_0_4.check_dragModel(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = (this.context.$implicit.draggable && this.parent.parent.context.drag);
    this._DraggableDirective_0_4.check_dragX(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = false;
    this._DraggableDirective_0_4.check_dragY(currVal_0_0_2,throwOnChange,false);
    this._DraggableDirective_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.context.$implicit.resizeable;
    this._ResizeableDirective_0_5.check_resizeEnabled(currVal_0_1_0,throwOnChange,false);
    this._ResizeableDirective_0_5.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this._LongPressDirective_0_6.detectChangesInInputProps(this,this._el_0,throwOnChange);
    const currVal_0_3_0:any = this.parent.parent.context.sortType;
    this._DataTableHeaderCellComponent_0_7.check_sortType(currVal_0_3_0,throwOnChange,false);
    const currVal_0_3_1:any = this.context.$implicit;
    this._DataTableHeaderCellComponent_0_7.check_column(currVal_0_3_1,throwOnChange,false);
    const currVal_0_3_2:any = this.parent.parent.context.sortAscendingIcon;
    this._DataTableHeaderCellComponent_0_7.check_sortAscendingIcon(currVal_0_3_2,throwOnChange,false);
    const currVal_0_3_3:any = this.parent.parent.context.sortDescendingIcon;
    this._DataTableHeaderCellComponent_0_7.check_sortDescendingIcon(currVal_0_3_3,throwOnChange,false);
    const currVal_0_3_4:any = this.parent.parent.context.headerHeight;
    this._DataTableHeaderCellComponent_0_7.check_headerHeight(currVal_0_3_4,throwOnChange,false);
    const currVal_0_3_5:any = this.parent.parent.context.sorts;
    this._DataTableHeaderCellComponent_0_7.check_sorts(currVal_0_3_5,throwOnChange,false);
    if (this._DataTableHeaderCellComponent_0_7.detectChangesInInputProps(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    this._DraggableDirective_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._ResizeableDirective_0_5.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._LongPressDirective_0_6.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._DataTableHeaderCellComponent_0_7.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<_View_DataTableHeaderComponent0>this.parent.parent)._query_DraggableDirective_1_0.setDirty();
  }
  destroyInternal():void {
    this._DraggableDirective_0_4.context.ngOnDestroy();
    this._ResizeableDirective_0_5.context.ngOnDestroy();
  }
  private _handle_resize_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.parent.parent.context.onColumnResized($event,this.context.$implicit)) !== false);
    return (true && pd_0_0);
  }
  private _handle_longPress_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>(this.parent.parent.context.drag = true)) !== false);
    return (true && pd_0_0);
  }
  private _handle_longPressEnd_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>(this.parent.parent.context.drag = false)) !== false);
    return (true && pd_0_0);
  }
  private _handle_sort_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.parent.parent.context.onSort($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_mouseup_0_4($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DraggableDirective_0_4.context.onMouseup($event)) !== false);
    const pd_0_1:any = ((<any>this._ResizeableDirective_0_5.context.onMouseup($event)) !== false);
    return ((true && pd_0_0) && pd_0_1);
  }
  private _handle_mousedown_0_5($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DraggableDirective_0_4.context.onMousedown($event)) !== false);
    const pd_0_1:any = ((<any>this._ResizeableDirective_0_5.context.onMousedown($event)) !== false);
    const pd_0_2:any = ((<any>this._LongPressDirective_0_6.context.onMouseDown($event)) !== false);
    return (((true && pd_0_0) && pd_0_1) && pd_0_2);
  }
  private _handle_mousemove_0_6($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._LongPressDirective_0_6.context.onMouseMove($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_mouseup_0_7($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._LongPressDirective_0_6.context.onMouseUp()) !== false);
    return (true && pd_0_0);
  }
}
function viewFactory_DataTableHeaderComponent2(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  return new _View_DataTableHeaderComponent2(viewUtils,parentInjector,declarationEl);
}